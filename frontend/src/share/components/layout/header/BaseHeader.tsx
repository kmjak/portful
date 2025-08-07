import { Anchor } from "@/share/components/ui";
import { JSX, ReactNode } from "react";

interface BaseHeaderProps {
  children: ReactNode;
  href: string;
}

/**
 * @description HeaderのBaseコンポーネント
 * @todo ナビゲーションメニューの実装
 * @todo ユーザー情報の表示(現在は仮にGuestと表示している)
 * @returns {JSX.Element}
 */
export default function BaseHeader({ children, href }: BaseHeaderProps): JSX.Element {
  return (
    <header className="flex justify-between items-center p-2 md:p-4 border-b border-gray-600 text-gray-200">
      <section className="flex items-center">
        <Anchor href={`${href}`} className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
          Portful
        </Anchor>
      </section>
      <section className="flex items-center">{children}</section>
    </header>
  );
}
