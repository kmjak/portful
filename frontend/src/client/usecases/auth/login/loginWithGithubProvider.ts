import { auth, githubProvider } from "@/client/lib/firebase";
import { signInWithPopup } from "firebase/auth";

/**
 * @description
 * GitHubで認証するためのプロバイダを使用してFirebase Authenticationにログインする関数
 *
 * @returns {Promise<string | undefined>} - IDトークンを返す。エラーが発生した場合はundefinedを返す。
 */
export default async function loginWithGithubProvider(): Promise<string | undefined> {
  try {
    await signInWithPopup(auth, githubProvider);
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
      console.error("Error signing in with Github:", error);
    }
    return undefined;
  }
}
