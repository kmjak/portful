import { PageTitle, Text } from "@/components/ui";
import Link from "next/link";
import { JSX } from "react";

export default function Failure(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center mt-5 md:mt-8 lg:mt-12">
      <PageTitle className="text-center">メールアドレス認証成功</PageTitle>
      <Text className="text-center">メールアドレスの認証に成功しました。</Text>

      <Text className="text-center">
        <Link href="/login" className="text-blue-500 hover:underline">
          ログインページへ戻る
        </Link>
      </Text>
    </div>
  );
}
