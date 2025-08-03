"use client";

import { loginWithGithubProvider, loginWithGoogleProvider } from "@/usecases/auth/login";
import { loginWithIdToken } from "@/services/auth/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UseOAuthLoginReturn {
  isOAuthLoginLoading: boolean;
  handleLoginWithGithub: () => Promise<void>;
  handleLoginWithGoogle: () => Promise<void>;
}

/**
 * @description
 * OAuthログイン処理を行うカスタムフック
 * GitHubとGoogleのログイン処理を提供する
 *
 * @returns {UseOAuthLoginReturn} - OAuthログイン処理を行う関数
 */
export default function useOAuthLogin(): UseOAuthLoginReturn {
  const [isOAuthLoginLoading, setIsOAuthLoginLoading] = useState<boolean>(false);
  const router = useRouter();

  /**
   * @description
   * GitHubでのログイン処理を行う関数
   *
   * @returns {Promise<void>}
   */
  const handleLoginWithGithub = async (): Promise<void> => {
    setIsOAuthLoginLoading(true);
    try {
      const idToken = await loginWithGithubProvider();

      if (idToken === undefined) {
        throw new Error("ID token is missing");
      }

      if (await loginWithIdToken({ idToken })) {
        router.replace("/client");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error signing in with GitHub:", error);
      }
      alert("GitHubでのログイン中にエラーが発生しました。");
    } finally {
      setIsOAuthLoginLoading(false);
    }
  };

  /**
   * @description
   * Googleでのログイン処理を行う関数
   *
   * @returns {Promise<void>}
   */
  const handleLoginWithGoogle = async (): Promise<void> => {
    setIsOAuthLoginLoading(true);
    try {
      const idToken = await loginWithGoogleProvider();

      if (idToken === undefined) {
        throw new Error("ID token is missing");
      }

      if (await loginWithIdToken({ idToken })) {
        router.replace("/mypage");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error signing in with Google:", error);
      }
      alert("Googleでのログイン中にエラーが発生しました。");
    } finally {
      setIsOAuthLoginLoading(false);
    }
  };

  return {
    isOAuthLoginLoading,
    handleLoginWithGithub,
    handleLoginWithGoogle,
  };
}
