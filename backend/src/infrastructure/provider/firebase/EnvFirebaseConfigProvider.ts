import { ClientEmail, FirebaseConfig, PrivateKey, ProjectId } from "@/domain/model/firebase";
import { FirebaseConfigProvider } from "@/domain/provider/firebase/FirebaseConfigProvider";

/**
 * @class EnvFirebaseConfigProvider
 * @description 環境変数からFirebaseの設定を提供するクラス
 */
export class EnvFirebaseConfigProvider implements FirebaseConfigProvider {
  /**
   * @description 環境変数からFirebaseの設定を読み込み、FirebaseConfigを返す。
   * @returns {FirebaseConfig} FirebaseConfig - Firebaseの設定
   * @throws {Error} - 環境変数が設定されていない場合
   */
  public load(): FirebaseConfig {
    try {
      const projectId = ProjectId.of(process.env.FIREBASE_PROJECT_ID || "");
      const clientEmail = ClientEmail.of(process.env.FIREBASE_CLIENT_EMAIL || "");
      const privateKey = PrivateKey.of(process.env.FIREBASE_PRIVATE_KEY || "");

      return FirebaseConfig.create(projectId, clientEmail, privateKey);
    } catch (error) {
      throw new Error(`
        [EnvFirebaseConfigProvider] Firebaseの環境変数に不正な値が存在します。
        ${error}
      `);
    }
  }
}
