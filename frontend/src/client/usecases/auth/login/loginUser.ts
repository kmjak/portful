import { auth } from "@/client/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginUserProps {
  readonly email: string;
  readonly password: string;
}

/**
 * @description
 * ユーザーをログインさせ、IDトークンを取得する関数
 * Firebase Authenticationを使用して、メールアドレスとパスワードでログインします。
 *
 * @param {LoginUserProps} props - ログインに必要な情報
 * @returns {Promise<string | undefined>} - 成功時はIDトークン、失敗時はundefined
 */
export default async function loginUser({
  email,
  password,
}: LoginUserProps): Promise<string | undefined> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
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
