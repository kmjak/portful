"use client";

import { useFormContext } from "react-hook-form";
import { JSX } from "react";
import { PasswordValidationMessage, EmailValidationMessage } from "@/client/types/validate";
import { AuthFormData } from "@/client/types/auth/shared";
import { validateEmail, validatePassword } from "@/share/utils/validate";
import { AuthButtons, AuthInputField } from "@/client/components/auth/shared";
import { useLogin } from "@/client/hooks/auth/login";

/**
 * @description
 * ログインフォームコンポーネント
 * メールアドレス、パスワードの入力フィールドを持つ
 * バリデーションを行い、エラーメッセージを表示する
 *
 * @returns {JSX.Element} ログインフォームのコンポーネント
 */
export default function LoginForm(): JSX.Element {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext<AuthFormData>();

  const { isLoginLoading, onSubmitLogin } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className="flex flex-col items-center">
      <AuthInputField
        label="メールアドレス"
        type="email"
        id="email"
        autoComplete="email"
        registerOptions={{
          validate: (value: string) => {
            const result: EmailValidationMessage = validateEmail({ email: value });
            if (result === EmailValidationMessage.Success) return true;
            return result;
          },
        }}
        errors={errors.email}
      />
      <AuthInputField
        label="パスワード"
        type="password"
        id="password"
        registerOptions={{
          required: "パスワードを入力してください",
          validate: (value: string) => {
            const result: PasswordValidationMessage = validatePassword({ password: value });
            if (result === PasswordValidationMessage.Success) return true;
            return result;
          },
        }}
        errors={errors.password}
      />

      <AuthButtons
        submitLabel="ログイン"
        loadingLabel="ログイン中..."
        isAuthLoading={isLoginLoading}
        className={"w-56 sm:w-64 md:w-80 lg:w-96"}
      />
    </form>
  );
}
