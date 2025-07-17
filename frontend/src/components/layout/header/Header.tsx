import { Text } from "@/components/ui";
import Link from "next/link";
import { JSX } from "react";

/**
 * @description Headerコンポーネント
 * @todo ナビゲーションメニューの実装
 * @todo ユーザー情報の表示(現在は仮にGuestと表示している)
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-between p-2 md:p-4 border-b border-gray-600 text-gray-200">
      <section>
        <Link href={"/"} className="text-2xl md:text-3xl font-bold cursor-pointer">
          Portful
        </Link>
        <nav></nav>
      </section>
      <section>
        <Text className="cursor-pointer">Guest</Text>
      </section>
    </header>
  );
}
