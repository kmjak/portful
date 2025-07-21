import { Input, Label } from "@/components/ui/";
import { AuthFormData } from "@/types/auth/shared";
import { AutoFill, HTMLInputTypeAttribute, JSX } from "react";
import { FieldError, RegisterOptions, useFormContext } from "react-hook-form";

interface AuthInputFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  id: keyof AuthFormData;
  autoComplete?: AutoFill;
  registerOptions: RegisterOptions<AuthFormData, keyof AuthFormData>;
  errors?: FieldError;
}

/**
 * @description
 * 認証に必要な入力フィールドコンポーネント
 * メールアドレス、パスワード、パスワード確認の入力フィールドを持つ
 * バリデーションを行い、エラーメッセージを表示する
 *
 * @param {string} label - 入力フィールドのラベル
 * @param {HTMLInputTypeAttribute} type - 入力フィールドのタイプ
 * @param {keyof AuthFormData} id - 入力フィールドのID
 * @param {AutoFill} autoComplete - 入力フィールドのオートコンプリート
 * @param {RegisterOptions<AuthFormData, keyof AuthFormData>} registerOptions - register関数のオプション
 * @param {FieldError} errors - 入力フィールドのエラー
 *
 * @returns {JSX.Element} - 新規登録フォームの入力フィールドコンポーネント
 */
export default function AuthInputField({
  label,
  type,
  id,
  autoComplete,
  registerOptions,
  errors,
}: AuthInputFieldProps): JSX.Element {
  const { register } = useFormContext<AuthFormData>();
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className="w-56 sm:w-64 md:w-80 lg:w-96"
        {...register(id, registerOptions)}
      />
      {errors?.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
    </div>
  );
}
