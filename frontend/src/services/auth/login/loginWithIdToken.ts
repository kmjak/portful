interface LoginWithIdTokenProps {
  readonly idToken: string;
}

/**
 * @description
 * IDTokenを使用してバックエンドで認証を行う関数
 *
 * @param {LoginWithIdTokenProps} props - IDトークンを含むオブジェクト
 * @param {string} props.idToken - IDトークン
 *
 * @returns {Promise<boolean>} - ログイン成功時はtrue、失敗時はfalseを返す
 */
export default async function loginWithIdToken({
  idToken,
}: LoginWithIdTokenProps): Promise<boolean> {
  try {
    const response: Response = await fetch(`/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to login with ID token");
    }

    return true;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error signing in with Firebase:", error);
    }
    alert("ログイン中にエラーが発生しました。");
    return false;
  }
}
