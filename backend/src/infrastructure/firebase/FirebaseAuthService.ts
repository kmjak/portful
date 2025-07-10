import { FirebaseUserId } from "@/domain/model/user";
import { FirebaseAdmin } from "@/infrastructure/firebase/FirebaseAdmin";
import { inject, injectable } from "tsyringe";

/**
 * @description FirebaseAuthServiceは、FirebaseのIDトークンを検証するサービス
 * @class FirebaseAuthService
 */
@injectable()
export class FirebaseAuthService {
  /**
   * @constructor
   * @param {FirebaseAdmin} admin - Firebase Admin SDKのインスタンス
   */
  constructor(@inject(FirebaseAdmin) private admin: FirebaseAdmin) {}

  /**
   * @description FirebaseのIDトークンを検証し、Firebase User IDを取得するメソッド
   * @param {string} idToken - FirebaseのIDトークン
   * @returns {Promise<FirebaseUserId>} - 検証されたFirebase User IDを返す
   * @throws {Error} - IDトークンの検証に失敗した場合にエラーをスローする
   */
  public async verifyIdToken(idToken: string): Promise<FirebaseUserId> {
    try {
      const app = this.admin.getApp();
      const { user_id: firebaseUserId } = await app.auth().verifyIdToken(idToken);
      return FirebaseUserId.of(firebaseUserId);
    } catch (error) {
      throw new Error(`
        [FirebaseAuthService] FirebaseのIDトークンの検証に失敗しました。
        エラー: ${error instanceof Error ? error.message : String(error)}
      `);
    }
  }
}
