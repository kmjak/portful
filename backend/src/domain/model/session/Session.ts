import { CreatedAt } from "@/domain/model/common";
import { UserId } from "@/domain/model/user";
import { ExpiresAt } from "./ExpiresAt";
import { LastAccessed } from "./LastAccessed";
import { SessionToken } from "./SessionToken";

/**
 * @class Session
 * @description セッション情報を管理するEntity
 * @property {SessionToken} sessionToken - セッショントークン
 * @property {UserId} userId - ユーザーID
 * @property {CreatedAt} createdAt - 作成日時
 * @property {ExpiresAt} expiresAt - 有効期限
 * @property {LastAccessed} lastAccessed - 最終アクセス日時
 */
export class Session {
  /**
   * @description コンストラクタ
   * @param {SessionToken} sessionToken - セッショントークン
   * @param {UserId} userId - ユーザーID
   * @param {CreatedAt} createdAt - 作成日時
   * @param {ExpiresAt} expiresAt - 有効期限
   * @param {LastAccessed} lastAccessed - 最終アクセス日時
   */
  private constructor(
    private readonly sessionToken: SessionToken,
    private readonly userId: UserId,
    private readonly createdAt: CreatedAt,
    private readonly expiresAt: ExpiresAt,
    private readonly lastAccessed: LastAccessed
  ) {}

  /**
   * @description Sessionのインスタンスを生成するメソッド
   * @param {SessionToken} sessionToken - セッショントークン
   * @param {UserId} userId - ユーザーID
   * @param {CreatedAt} createdAt - 作成日時
   * @param {ExpiresAt} expiresAt - 有効期限
   * @param {LastAccessed} lastAccessed - 最終アクセス日時
   * @returns {Session} - Sessionインスタンス
   */
  public static create(
    sessionToken: SessionToken,
    userId: UserId,
    createdAt: CreatedAt,
    expiresAt: ExpiresAt,
    lastAccessed: LastAccessed
  ): Session {
    return new Session(sessionToken, userId, createdAt, expiresAt, lastAccessed);
  }

  /**
   * @description セッショントークンを返すメソッド
   * @returns {SessionToken} - セッショントークン
   */
  public getSessionToken(): SessionToken {
    return this.sessionToken;
  }

  /**
   * @description セッショントークンの値を返すメソッド
   * @returns {string} - セッショントークンの値
   */
  public getSessionTokenValue(): string {
    return this.sessionToken.getValue();
  }

  /**
   * @description ユーザーIDを返すメソッド
   * @returns {UserId} - ユーザーID
   */
  public getUserId(): UserId {
    return this.userId;
  }

  /**
   * @description ユーザーIDの値を返すメソッド
   * @returns {number} - ユーザーIDの値
   */
  public getUserIdValue(): number {
    return this.userId.getValue();
  }

  /**
   * @description 作成日時を返すメソッド
   * @returns {CreatedAt} - 作成日時
   */
  public getCreatedAt(): CreatedAt {
    return this.createdAt;
  }

  /**
   * @description 作成日時の値を返すメソッド
   * @returns {Date} - 作成日時の値
   */
  public getCreatedAtValue(): Date {
    return this.createdAt.getValue();
  }

  /**
   * @description 有効期限を返すメソッド
   * @returns {ExpiresAt} - 有効期限
   */
  public getExpiresAt(): ExpiresAt {
    return this.expiresAt;
  }

  /**
   * @description 有効期限の値を返すメソッド
   * @returns {Date} - 有効期限の値
   */
  public getExpiresAtValue(): Date {
    return this.expiresAt.getValue();
  }

  /**
   * @description 最終アクセス日時を返すメソッド
   * @returns {LastAccessed} - 最終アクセス日時
   */
  public getLastAccessed(): LastAccessed {
    return this.lastAccessed;
  }

  /**
   * @description 最終アクセス日時の値を返すメソッド
   * @returns {Date} - 最終アクセス日時の値
   */
  public getLastAccessedValue(): Date {
    return this.lastAccessed.getValue();
  }
}
