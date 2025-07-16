import { FirebaseConfigProvider } from "@/domain/provider/firebase/FirebaseConfigProvider";
import admin, { ServiceAccount } from "firebase-admin";
import { cert } from "firebase-admin/app";
import { inject, injectable, singleton } from "tsyringe";

/**
 * @class FirebaseAdmin
 * @description FirebaseAdminは、Firebase Admin SDKの初期化とアプリを提供するクラス
 */
@singleton()
@injectable()
export class FirebaseAdmin {
  private app: admin.app.App | undefined;

  public constructor(
    @inject("EnvFirebaseConfigProvider")
    private readonly firebaseConfigProvider: FirebaseConfigProvider
  ) {}

  /**
   * @description Firebase Admin SDKのインスタンスを取得
   * @returns {admin.app.App} Firebase Admin SDKのアプリ
   */
  public getApp(): admin.app.App {
    if (this.app) {
      return this.app;
    }

    const firebaseConfig = this.firebaseConfigProvider.load();
    const serviceAccount: ServiceAccount = {
      projectId: firebaseConfig.getProjectIdValue(),
      clientEmail: firebaseConfig.getClientEmailValue(),
      privateKey: firebaseConfig.getPrivateKeyValue(),
    };

    this.app = admin.initializeApp({
      credential: cert(serviceAccount),
    });

    return this.app;
  }
}
