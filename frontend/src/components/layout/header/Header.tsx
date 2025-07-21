import { Anchor, Text } from "@/components/ui";
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
        <Anchor href={"/"} className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
          Portful
        </Anchor>
        <nav></nav>
      </section>
      <section>
        <Text className="cursor-pointer">Guest</Text>
      </section>
    </header>
  );
}
