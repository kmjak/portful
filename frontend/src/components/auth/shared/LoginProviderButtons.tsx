import { JSX } from "react";
import { Button } from "@/components/ui";

interface LoginProviderButtonsProps {
  isLoading: boolean;
  className?: string;
  handleLoginWithGithub: () => Promise<void>;
  handleLoginWithGoogle: () => Promise<void>;
}

/**
 * @description
 * ログインできるプロバイダーのボタンコンポーネント
 * Github認証とGoogle認証用
 *
 * @param {boolean} isLoading - ローディング状態
 * @param {string} [className] - 追加のCSSクラス
 * @returns {JSX.Element} ログインプロバイダーボタンのコンポーネント
 */
export default function LoginProviderButtons({
  isLoading,
  className,
  handleLoginWithGithub,
  handleLoginWithGoogle,
}: LoginProviderButtonsProps): JSX.Element {
  return (
    <>
      <Button onClick={handleLoginWithGithub} className={className} disabled={isLoading}>
        GitHubでログイン
      </Button>
      <Button onClick={handleLoginWithGoogle} className={className} disabled={isLoading}>
        Googleでログイン
      </Button>
    </>
  );
}
