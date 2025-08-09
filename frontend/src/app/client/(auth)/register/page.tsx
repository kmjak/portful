import { Metadata } from "next";
import { JSX } from "react";
import { AuthFormProvider } from "@/client/components/provider";
import { RegisterForm } from "@/client/components/auth/register";
import { Anchor, PageTitle, Text } from "@/share/components/ui";

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

      <AuthFormProvider>
        <RegisterForm />
      </AuthFormProvider>

      <div className="flex flex-col mt-5 md:mt-10">
        <Text>
          すでにアカウントをお持ちですか？
          <Anchor href="/client/login" className="text-blue-500">
            ログイン
          </Anchor>
        </Text>
      </div>
    </>
  );
}
