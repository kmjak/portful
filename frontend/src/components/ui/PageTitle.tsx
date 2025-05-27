import cn from "@/utils/tailwindcss/cn";
import { HTMLProps, JSX, ReactNode } from "react";

interface PageTitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}

/**
 * @description
 * 再利用可能なPageTitleコンポーネント
 * ページのタイトルや見出しを表示するために使うことを想定している
 * classNameプロパティを使ってスタイルを追加・上書きすることができる
 *
 * @param {string} [className] - 追加のCSSクラス
 * @param {ReactNode} children - タイトルの内容
 * @param {HTMLProps<HTMLHeadingElement>} props - HTMLの標準的なh1の属性
 * @returns {JSX.Element} - PageTitleコンポーネント
 */
export default function PageTitle({ children, className, ...props }: PageTitleProps): JSX.Element {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4 select-none",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
