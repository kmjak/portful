import { Metadata } from "next";
import { JSX } from "react";
import { AuthFormProvider } from "@/components/provider";
import { Anchor, PageTitle, Text } from "@/components/ui";
import { LoginForm } from "@/components/auth/login";

export const metadata: Metadata = {
  title: "ログイン",
  description:
    "[ログインページ] リアルタイム対戦型タイピングゲーム。お互いの選んだ文章を打ち合い、勝敗を競い合え！",
};

/**
 * @description
 * ログインページコンポーネント
 * このコンポーネントは、ユーザーがログインするためのフォームを提供します。
 *
 * @returns {JSX.Element} - ログインページのコンポーネント
 */
export default function Login(): JSX.Element {
  return (
    <>
      <PageTitle>ログイン</PageTitle>

      <AuthFormProvider>
        <LoginForm />
      </AuthFormProvider>

      <div className="flex flex-col mt-5 md:mt-10">
        <Text>
          まだアカウントをお持ちでないですか？
          <Anchor href="/register" className="text-blue-500">
            新規登録
          </Anchor>
        </Text>
      </div>
    </>
  );
}
