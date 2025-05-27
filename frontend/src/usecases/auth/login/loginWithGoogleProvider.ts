import { auth, googleProvider } from "@/lib/firebase/firebase";
import { signInWithPopup } from "firebase/auth";

/**
 * @description
 * Googleで認証するためのプロバイダを使用してFirebase Authenticationにログインする関数
 *
 * @returns {Promise<string | undefined>} - IDトークンを返す。エラーが発生した場合はundefinedを返す。
 */
export default async function loginWithGoogleProvider(): Promise<string | undefined> {
  try {
    await signInWithPopup(auth, googleProvider);
    if (!auth.currentUser) {
      throw new Error("User is null");
    }

    const idToken: string = await auth.currentUser.getIdToken();

    await auth.signOut();
    return idToken;
  } catch (error) {
    if (auth.currentUser) {
      try {
        await auth.signOut();
      } catch (signOutError) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error signing out after login:", signOutError);
        }
      }
    }

    if (process.env.NODE_ENV === "development") {
      console.error("Error signing in with Google:", error);
    }
    return undefined;
  }
}
