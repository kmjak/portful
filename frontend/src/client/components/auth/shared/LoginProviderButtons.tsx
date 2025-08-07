import { JSX } from "react";
import { Button } from "@/share/components/ui";
import { BsGithub, BsGoogle } from "react-icons/bs";

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
        <div className="flex justify-center items-center gap-x-2">
          <BsGithub />
          GitHubでログイン
        </div>
      </Button>
      <Button onClick={handleLoginWithGoogle} className={className} disabled={isLoading}>
        <div className="flex justify-center items-center gap-x-2">
          <BsGoogle />
          Googleでログイン
        </div>
      </Button>
    </>
  );
}
