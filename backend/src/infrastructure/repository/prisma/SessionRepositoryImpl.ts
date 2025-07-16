import { CreatedAt, CurrentDate } from "@/domain/model/common";
import { ExpiresAt, LastAccessed, Session, SessionToken } from "@/domain/model/session";
import { UserId } from "@/domain/model/user";
import { SessionRepository } from "@/domain/repository/session/SessionRepository";
import { PrismaClient } from "@/infrastructure/prisma/PrismaClient";
import { inject, injectable } from "tsyringe";

/**
 * @class SessionRepositoryImpl
 * @description SessionRepositoryImplは、セッションに関するデータ操作をPrismaを使用して実装するクラス
 */
@injectable()
export class SessionRepositoryImpl implements SessionRepository {
  /**
   * @constructor
   * @param {PrismaClient} prismaClient - Prismaクライアントのインスタンス
   */
  constructor(@inject(PrismaClient) private readonly prismaClient: PrismaClient) {}
  /**
   * @description prismaを使用して新しいセッションを作成するメソッド
   * @param {SessionToken} sessionToken - セッショントークン
   * @param {UserId} userId - ユーザーID
   * @param {CurrentDate} currentDate - 現在の日付
   * @returns {Promise<Session>} - 作成されたセッションのインスタンス
   */
  public async createSession(
    sessionToken: SessionToken,
    userId: UserId,
    currentDate: CurrentDate
  ): Promise<Session> {
    const client = this.prismaClient.getClient();
    const session = await client.session.create({
      data: {
        sessionToken: sessionToken.getValue(),
        userId: userId.getValue(),
        expiresAt: currentDate.plusDays(30),
      },
    });
    try {
      return Session.create(
        SessionToken.of(session.sessionToken),
        UserId.of(session.userId),
        CreatedAt.of(session.createdAt),
        ExpiresAt.of(session.expiresAt),
        LastAccessed.of(session.lastAccessed)
      );
    } catch (error) {
      console.error("Error creating Session object:", error);
      throw new Error("Failed to create Session object from database data.");
    }
  }

  /**
   * @description ユーザーIDを使用してPrismaからアクティブなセッションを取得するメソッド
   * @param {UserId} userId - ユーザーID
   * @param {CurrentDate} currentDate - 現在の日付
   * @returns {Promise<Session | null>} - アクティブなセッションが存在する場合はSessionオブジェクト、存在しない場合はnull
   */
  public async getActiveSessionByUserId(
    userId: UserId,
    currentDate: CurrentDate
  ): Promise<Session | null> {
    const client = this.prismaClient.getClient();
    const session = await client.session.findFirst({
      where: {
        userId: userId.getValue(),
        lastAccessed: {
          gte: currentDate.minusDays(7),
        },
        expiresAt: {
          gte: currentDate.getValue(),
        },
      },
    });
    try {
      if (!session) {
        return null;
      }

      return Session.create(
        SessionToken.of(session.sessionToken),
        UserId.of(session.userId),
        CreatedAt.of(session.createdAt),
        ExpiresAt.of(session.expiresAt),
        LastAccessed.of(session.lastAccessed)
      );
    } catch (error) {
      console.error("Error creating Session object:", error);
      throw new Error("Failed to create Session object from database data.");
    }
  }

  /**
   * @description セッショントークンを使用してセッションを更新するメソッド
   * @param {SessionToken} sessionToken - セッショントークン
   * @param {CurrentDate} currentDate - 現在の日付
   * @returns {Promise<Session>} - 更新されたセッションのインスタンス
   */
  public async updateSessionWithToken(
    sessionToken: SessionToken,
    currentDate: CurrentDate
  ): Promise<Session> {
    const client = this.prismaClient.getClient();
    const session = await client.session.update({
      where: {
        sessionToken: sessionToken.getValue(),
      },
      data: {
        lastAccessed: currentDate.getValue(),
      },
    });

    try {
      return Session.create(
        SessionToken.of(session.sessionToken),
        UserId.of(session.userId),
        CreatedAt.of(session.createdAt),
        ExpiresAt.of(session.expiresAt),
        LastAccessed.of(session.lastAccessed)
      );
    } catch (error) {
      console.error("Error creating Session object:", error);
      throw new Error("Failed to create Session object from database data.");
    }
  }
}
