import { UserId } from "@/domain/model/user";
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
   * @description FirebaseのIDトークンを検証し、ユーザーIDを取得するメソッド
   * @param {string} idToken - FirebaseのIDトークン
   * @returns {Promise<UserId>} - 検証されたユーザーIDを返す
   * @throws {Error} - IDトークンの検証に失敗した場合にエラーをスローする
   */
  public async verifyIdToken(idToken: string): Promise<UserId> {
    try {
      const app = this.admin.getApp();
      const { user_id: firebaseUserId } = await app.auth().verifyIdToken(idToken);
      return UserId.of(firebaseUserId);
    } catch (error) {
      throw new Error(`
        [FirebaseAuthService] FirebaseのIDトークンの検証に失敗しました。
        エラー: ${error instanceof Error ? error.message : String(error)}
      `);
    }
  }
}
