"use client";

import { AuthFormData } from "@/types/auth/shared";
import { EmailValidationMessage } from "@/types/validate/EmailValidationMessage";
import { PasswordValidationMessage } from "@/types/validate/PasswordValidationMessage";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { validateEmail, validatePassword } from "@/utils/validate";
import { useRouter } from "next/navigation";
import { registerUser } from "@/usecases/auth/register";

interface UseRegisterReturn {
  isLoading: boolean;
  onSubmitRegister: (registerData: Readonly<AuthFormData>) => Promise<void>;
}

/**
 * @description
 * ユーザー登録処理を行うカスタムフック
 *
 * @returns {UseRegisterReturn} - ユーザー登録処理を行う関数
 */
export default function useRegister(): UseRegisterReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setError } = useFormContext<AuthFormData>();
  const router = useRouter();

  /**
   * @description
   * ユーザー登録処理を行う関数
   * react-hook-formのonSubmitで使用
   *
   * @param registerData - ユーザー登録データ
   */
  const onSubmitRegister = async (registerData: Readonly<AuthFormData>): Promise<void> => {
    setIsLoading(true);
    const { email, password, confirmPassword } = registerData;
    try {
      if (password !== confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "パスワードが一致しません",
        });
        setIsLoading(false);
        return;
      }

      const emailValidationResult: EmailValidationMessage = validateEmail({ email });
      const passwordValidationResult: PasswordValidationMessage = validatePassword({
        password,
      });

      if (emailValidationResult !== EmailValidationMessage.Success) {
        setError("email", {
          type: "manual",
          message: emailValidationResult,
        });
        setIsLoading(false);
        return;
      }

      if (passwordValidationResult !== PasswordValidationMessage.Success) {
        setError("password", {
          type: "manual",
          message: passwordValidationResult,
        });
        setIsLoading(false);
        return;
      }

      if (!(await registerUser({ email, password }))) {
        throw new Error("User registration failed");
      }

      router.push("/client/login");
      alert("確認メールを送信しました。メールを確認してください。");
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Error during registration:", error);
      }

      alert("登録中にエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    onSubmitRegister,
  };
}
