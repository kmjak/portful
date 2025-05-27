"use client";

import { useFormContext } from "react-hook-form";
import { JSX } from "react";
import { PasswordValidationMessage } from "@/types/validate/PasswordValidationMessage";
import { AuthFormData } from "@/types/auth/shared";
import { EmailValidationMessage } from "@/types/validate/EmailValidationMessage";
import { useRegister } from "@/hooks/auth/register";
import { validateEmail, validatePassword } from "@/utils/validate";
import { AuthButtons, AuthInputField } from "@/components/auth/shared";

/**
 * @description
 * 新規登録フォームコンポーネント
 * メールアドレス、パスワード、パスワード確認の入力フィールドを持つ
 * バリデーションを行い、エラーメッセージを表示する
 *
 * @returns {JSX.Element} 新規登録フォームのコンポーネント
 */
export default function RegisterForm(): JSX.Element {
  const {
    formState: { errors },
    watch,
    handleSubmit,
  } = useFormContext<AuthFormData>();

  const { isLoading, onSubmitRegister } = useRegister();

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)} className="flex flex-col items-center">
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

      <AuthInputField
        label="パスワード確認"
        type="password"
        id="confirmPassword"
        registerOptions={{
          required: "パスワードを再度入力してください",
          validate: (value: string) => {
            const password = watch("password");
            if (value !== password) return "パスワードが一致しません";
            const result: PasswordValidationMessage = validatePassword({ password: value });
            if (result === PasswordValidationMessage.Success) return true;
            return result;
          },
        }}
        errors={errors.confirmPassword}
      />

      <AuthButtons
        submitLabel="新規登録"
        loadingLabel="登録中..."
        isAuthLoading={isLoading}
        className={"w-56 sm:w-64 md:w-80 lg:w-96"}
      />
    </form>
  );
}
