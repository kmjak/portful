import { PageTitle, Text } from "@/components/ui";
import Link from "next/link";
import { JSX } from "react";

/**
 * @description
 * メールアドレス認証失敗ページ
 * ユーザーがメールアドレスの認証に失敗した場合に表示されるページです。
 * ユーザーに新規登録ページへのリンクを提供します。
 *
 * @returns {JSX.Element} メールアドレス認証失敗ページのコンポーネント
 */
export default function Failure(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-8 lg:mt-12">
      <PageTitle className="text-center">メールアドレス認証失敗</PageTitle>
      <Text className="text-center">メールアドレスの認証に失敗しました。</Text>

      <Text className="text-center">
        <Link href="/register" className="text-blue-500 hover:underline">
          新規登録ページに戻る
        </Link>
      </Text>
    </div>
  );
}
