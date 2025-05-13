import { JSX, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

/**
 * @description
 * レイアウトコンポーネント
 * 認証関連のページで使用されるレイアウトを定義する
 *
 * @param {JSX.Element} children - レイアウト内に表示する子要素
 * @returns {JSX.Element} - レイアウトコンポーネント
 */
export default function Layout({ children }: LayoutProps): JSX.Element {
  return <main className="flex flex-col items-center my-8 md:my-12">{children}</main>;
}
