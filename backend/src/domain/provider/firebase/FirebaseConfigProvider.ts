import { FirebaseConfig } from "@/domain/model/firebase";

/**
 * @description FirebaseConfigProviderは、Firebaseの設定を提供するインターフェース
 * @interface FirebaseConfigProvider
 */
export interface FirebaseConfigProvider {
  load(): FirebaseConfig;
}
