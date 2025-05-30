import { Button } from "@/components/ui";
import { LoginProviderButtons } from "@/components/auth/shared";
import { JSX } from "react";
import { useOAuthLogin } from "@/hooks/auth/login";
import cn from "@/utils/tailwindcss/cn";

interface AuthButtonsProps {
  submitLabel: string;
  loadingLabel: string;
  isAuthLoading: boolean;
  className: string;
}

/**
 * @description
 * 認証に必要なボタンコンポーネント
 * 新規登録、ログインのフォームで使用される
 *
 * @param {string} submitLabel - 送信ボタンのラベル
 * @param {string} loadingLabel - ローディング中のラベル
 * @param {boolean} isAuthLoading - ローディング中かどうか
 * @param {string} className - ボタンのクラス名
 *
 * @returns {JSX.Element} 認証に必要なボタンコンポーネント
 */
export default function AuthButtons({
  submitLabel,
  loadingLabel,
  isAuthLoading,
  className,
}: AuthButtonsProps): JSX.Element {
  const { isOAuthLoginLoading, handleLoginWithGithub, handleLoginWithGoogle } = useOAuthLogin();

  const isLoading = isAuthLoading || isOAuthLoginLoading;
  return (
    <div className="flex flex-col mt-5 md:mt-10">
      <Button
        type="submit"
        className={cn(
          className,
          isLoading &&
            "bg-neutral-500 cursor-not-allowed border-gray-400 opacity-50 hover:opacity-50"
        )}
        disabled={isLoading}
      >
        {isLoading ? loadingLabel : submitLabel}
      </Button>
      <LoginProviderButtons
        isLoading={isLoading}
        className={cn(
          className,
          isLoading &&
            "bg-neutral-500 cursor-not-allowed border-gray-400 opacity-50 hover:opacity-50"
        )}
        handleLoginWithGithub={handleLoginWithGithub}
        handleLoginWithGoogle={handleLoginWithGoogle}
      />
    </div>
  );
}
