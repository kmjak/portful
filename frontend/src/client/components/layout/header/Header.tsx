import { BaseHeader } from "@/share/components/layout/header";
import { Text } from "@/share/components/ui";
import { JSX } from "react";

/**
 * @description Headerコンポーネント
 * @todo ナビゲーションメニューの実装
 * @todo ユーザー情報の表示(現在は仮にGuestと表示している)
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <BaseHeader href={"/client"}>
      <nav className="flex items-center"></nav>
      <Text className="cursor-pointer">Guest</Text>
    </BaseHeader>
  );
}
