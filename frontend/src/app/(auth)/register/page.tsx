import { Metadata } from "next";
import { JSX } from "react";
import Link from "next/link";
import { RegisterFormProvider } from "@/components/provider";
import { RegisterForm } from "@/components/auth/register";
import { PageTitle, Text } from "@/components/ui";

export const metadata: Metadata = {
  title: "新規登録",
  description:
    "[新規登録ページ] リアルタイム対戦型タイピングゲーム。お互いの選んだ文章を打ち合い、勝敗を競い合え！",
};

/**
 * @description
 * ユーザーの新規登録ページ
 * 登録フォームとログインページへのリンクを表示する
 *
 * @returns {JSX.Element} 新規登録ページのコンポーネント
 */
export default function Register(): JSX.Element {
  return (
    <>
      <PageTitle>新規登録</PageTitle>

      <RegisterFormProvider>
        <RegisterForm />
      </RegisterFormProvider>

      <div className="flex flex-col mt-5 md:mt-10">
        <Text>
          すでにアカウントをお持ちですか？
          <Link href="/login" className="text-blue-500 hover:underline">
            ログイン
          </Link>
        </Text>
      </div>
    </>
  );
}
