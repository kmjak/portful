"use client";

import { loginWithIdToken } from "@/services/auth/login";
import { AuthFormData } from "@/types/auth/shared";
import { EmailValidationMessage, PasswordValidationMessage } from "@/types/validate";
import { loginUser } from "@/usecases/auth/login";
import { validateEmail, validatePassword } from "@/utils/validate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface UseLoginReturn {
  isLoginLoading: boolean;
  onSubmitLogin: (registerData: Readonly<AuthFormData>) => Promise<void>;
}

/**
 * @description
 * ログイン処理を行うカスタムフック
 * このフックは、ログイン状態の管理とログイン処理を提供します。
 *
 * @returns {UseLoginReturn} - ログイン処理を行う関数
 */
export default function useLogin(): UseLoginReturn {
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const router = useRouter();
  const { setError } = useFormContext<AuthFormData>();

  /**
   * @description
   * ログイン処理を開始する
   */
  const onSubmitLogin = async (registerData: Readonly<AuthFormData>): Promise<void> => {
    setIsLoginLoading(true);
    const { email, password } = registerData;
    try {
      const emailValidationResult: EmailValidationMessage = validateEmail({ email });
      const passwordValidationResult: PasswordValidationMessage = validatePassword({
        password,
      });

      if (emailValidationResult !== EmailValidationMessage.Success) {
        setError("email", {
          type: "manual",
          message: emailValidationResult,
        });
        setIsLoginLoading(false);
        return;
      }

      if (passwordValidationResult !== PasswordValidationMessage.Success) {
        setError("password", {
          type: "manual",
          message: passwordValidationResult,
        });
        setIsLoginLoading(false);
        return;
      }

      const idToken = await loginUser({
        email,
        password,
      });

      if (idToken === undefined) {
        throw new Error("ID token is missing");
      }

      if (await loginWithIdToken({ idToken })) {
        router.replace("/mypage");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error during login:", error);
      }
    } finally {
      setIsLoginLoading(false);
    }
  };

  return {
    isLoginLoading,
    onSubmitLogin,
  };
}
