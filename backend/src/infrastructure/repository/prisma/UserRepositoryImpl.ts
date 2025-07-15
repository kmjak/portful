import { CreatedAt } from "@/domain/model/common";
import { FirebaseUserId, User, UserId, UserName } from "@/domain/model/user";
import { UserRepository } from "@/domain/repository/UserRepository";
import { PrismaClient } from "@/infrastructure/prisma/PrismaClient";
import { inject, injectable } from "tsyringe";

/**
 * @class UserRepositoryImpl
 * @description UserRepositoryImplは、UserRepositoryインターフェースを実装し、Prismaを使用してユーザーデータを操作
 */
@injectable()
export class UserRepositoryImpl implements UserRepository {
  /**
   * @constructor
   * @param {PrismaClient} prismaAdmin - Prismaクライアントのインスタンス
   */
  constructor(@inject(PrismaClient) private readonly prismaAdmin: PrismaClient) {}

  /**
   * @description Firebase User IDを使用してPrismaからユーザーを取得するメソッド
   * @param {FirebaseUserId} firebaseUserId - FirebaseのユーザーID
   * @returns {Promise<User | null>} - ユーザーが存在する場合はUserオブジェクト、存在しない場合はnull
   * @throws {Error} - ユーザーの取得に失敗した場合にエラーをスローする
   */
  public async getUserWithFirebaseUserId(firebaseUserId: FirebaseUserId): Promise<User | null> {
    const client = this.prismaAdmin.getClient();
    const userData = await client.user.findUnique({
      where: {
        firebaseUserId: firebaseUserId.getValue(),
      },
    });

    if (!userData) return null;

    try {
      return User.create(
        UserId.of(userData.userId),
        UserName.of(userData.name),
        CreatedAt.of(userData.createdAt),
        FirebaseUserId.of(userData.firebaseUserId)
      );
    } catch (error) {
      console.error("Error creating User object:", error);
      throw new Error("Failed to create User object from database data.");
    }
  }

  /**
   * @description 新しいユーザーを作成するメソッド
   * @param {FirebaseUserId} firebaseUserId - FirebaseのユーザーID
   * @returns {Promise<User>} - 作成されたユーザーのUserオブジェクト
   * @throws {Error} - ユーザーの作成に失敗した場合にエラーをスローする
   */
  public async createUser(firebaseUserId: FirebaseUserId): Promise<User> {
    const client = this.prismaAdmin.getClient();
    const data = await client.user.create({
      data: {
        firebaseUserId: firebaseUserId.getValue(),
      },
    });

    try {
      return User.create(
        UserId.of(data.userId),
        UserName.of(data.name),
        CreatedAt.of(data.createdAt),
        FirebaseUserId.of(data.firebaseUserId)
      );
    } catch (error) {
      console.error("Error creating User object:", error);
      throw new Error("Failed to create User object from database data.");
    }
  }
}
