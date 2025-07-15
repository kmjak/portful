import { CreatedAt } from "@/domain/model/common";
import { FirebaseUserId } from "./FirebaseUserId";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

/**
 * @class User
 * @description ユーザー情報を保持するEntity
 * @property {UserId} userId - ユーザーID
 * @property {UserName} name - ユーザー名
 * @property {CreatedAt} createdAt - 作成日時
 * @property {FirebaseUserId} firebaseUserId - FirebaseユーザーID
 */
export class User {
  /**
   * @description コンストラクタ
   * @param {UserId} userId - ユーザーID
   * @param {UserName} name - ユーザー名
   * @param {CreatedAt} createdAt - 作成日時
   * @param {FirebaseUserId} firebaseUserId - FirebaseユーザーID
   */
  private constructor(
    private readonly userId: UserId,
    private readonly name: UserName,
    private readonly createdAt: CreatedAt,
    private readonly firebaseUserId: FirebaseUserId
  ) {}

  /**
   * @description Userのインスタンスを生成するメソッド
   * @param {UserId} userId - ユーザーID
   * @param {UserName} name - ユーザー名
   * @param {CreatedAt} createdAt - 作成日時
   * @param {FirebaseUserId} firebaseUserId - FirebaseユーザーID
   * @returns {User} - Userのインスタンス
   *
   * @remarks
   * 各Value Object側でバリデーションを行っているため、
   * User内での追加バリデーションは不要。
   */
  public static create(
    userId: UserId,
    name: UserName,
    createdAt: CreatedAt,
    firebaseUserId: FirebaseUserId
  ): User {
    return new User(userId, name, createdAt, firebaseUserId);
  }

  /**
   * @description ユーザーIDのインスタンスを取得するメソッド
   * @returns {UserId} - ユーザーIDのインスタンス
   */
  public getUserId(): UserId {
    return this.userId;
  }

  /**
   * @description ユーザーIDの値を取得するメソッド
   * @returns {number} - ユーザーIDの値
   */
  public getUserIdValue(): number {
    return this.userId.getValue();
  }

  /**
   * @description ユーザー名のインスタンスを取得するメソッド
   * @returns {UserName} - ユーザー名のインスタンス
   */
  public getName(): UserName {
    return this.name;
  }

  /**
   * @description ユーザー名の値を取得するメソッド
   * @returns {string | null} - ユーザー名の値
   */
  public getNameValue(): string | null {
    return this.name.getValue();
  }

  /**
   * @description 作成日時のインスタンスを取得するメソッド
   * @returns {CreatedAt} - 作成日時のインスタンス
   */
  public getCreatedAt(): CreatedAt {
    return this.createdAt;
  }

  /**
   * @description 作成日時の値を取得するメソッド
   * @returns {Date} - 作成日時の値
   */
  public getCreatedAtValue(): Date {
    return this.createdAt.getValue();
  }

  /**
   * @description FirebaseユーザーIDのインスタンスを取得するメソッド
   * @returns {FirebaseUserId} - FirebaseユーザーIDのインスタンス
   */
  public getFirebaseUserId(): FirebaseUserId {
    return this.firebaseUserId;
  }

  /**
   * @description FirebaseユーザーIDの値を取得するメソッド
   * @returns {string} - FirebaseユーザーIDの値
   */
  public getFirebaseUserIdValue(): string {
    return this.firebaseUserId.getValue();
  }
}
