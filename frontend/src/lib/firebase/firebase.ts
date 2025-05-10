import { initializeApp, getApps, FirebaseApp, FirebaseOptions } from "firebase/app";
import { Auth, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

/**
 * Firebaseの初期化
 * apiKey, authDomain, projectIdは環境変数から取得
 */
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
};

/**
 * Firebaseアプリのインスタンスを取得
 * すでに初期化されている場合は再利用する
 */
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

/**
 * firebaseの認証機能を初期化
 */
const auth: Auth = getAuth(app);

/**
 * Githubで認証するためのプロバイダ
 */
const githubProvider: GithubAuthProvider = new GithubAuthProvider();

/**
 * Googleで認証するためのプロバイダ
 */
const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

export { app, auth, githubProvider, googleProvider };
