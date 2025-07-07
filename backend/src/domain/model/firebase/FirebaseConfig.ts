import { ClientEmail } from "./ClientEmail";
import { PrivateKey } from "./PrivateKey";
import { ProjectId } from "./ProjectId";

/**
 * @class FirebaseConfig
 * @description Firebaseの設定を表すEntity
 * @property {ProjectId} projectId - FirebaseのProject ID
 * @property {ClientEmail} clientEmail - FirebaseのClient Email
 * @property {PrivateKey} privateKey - FirebaseのPrivate Key
 */
export class FirebaseConfig {
  /**
   * @description コンストラクタ
   * @param {ProjectId} projectId - FirebaseのProject ID
   * @param {ClientEmail} clientEmail - FirebaseのClient Email
   * @param {PrivateKey} privateKey - FirebaseのPrivate Key
   */
  public constructor(
    private readonly projectId: ProjectId,
    private readonly clientEmail: ClientEmail,
    private readonly privateKey: PrivateKey
  ) {}

  /**
   * @description FirebaseConfigのインスタンスを生成するメソッド
   * @param {ProjectId} projectId - FirebaseのProject ID
   * @param {ClientEmail} clientEmail - FirebaseのClient Email
   * @param {PrivateKey} privateKey - FirebaseのPrivate Key
   * @returns {FirebaseConfig} - FirebaseConfigインスタンス
   */
  public static create(
    projectId: ProjectId,
    clientEmail: ClientEmail,
    privateKey: PrivateKey
  ): FirebaseConfig {
    return new FirebaseConfig(projectId, clientEmail, privateKey);
  }

  /**
   * @description FirebaseのProject IDのインスタンスを取得するメソッド
   * @returns {ProjectId} - FirebaseのProject IDのインスタンス
   */
  public getProjectId(): ProjectId {
    return this.projectId;
  }

  /**
   * @description FirebaseのProject IDの値を取得するメソッド
   * @returns {string} - FirebaseのProject IDの値
   */
  public getProjectIdValue(): string {
    return this.projectId.getValue();
  }

  /**
   * @description FirebaseのClient Emailのインスタンスを取得するメソッド
   * @returns {ClientEmail} - FirebaseのClient Emailのインスタンス
   */
  public getClientEmail(): ClientEmail {
    return this.clientEmail;
  }

  /**
   * @description FirebaseのClient Emailの値を取得するメソッド
   * @returns {string} - FirebaseのClient Emailの値
   */
  public getClientEmailValue(): string {
    return this.clientEmail.getValue();
  }

  /**
   * @description FirebaseのPrivate Keyのインスタンスを取得するメソッド
   * @returns {PrivateKey} - FirebaseのPrivate Keyのインスタンス
   */
  public getPrivateKey(): PrivateKey {
    return this.privateKey;
  }

  /**
   * @description FirebaseのPrivate Keyの値を取得するメソッド
   * @returns {string} - FirebaseのPrivate Keyの値
   */
  public getPrivateKeyValue(): string {
    return this.privateKey.getValue();
  }
}
