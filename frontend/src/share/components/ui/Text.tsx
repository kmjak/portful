import cn from "@/share/utils/tailwindcss/cn";
import { JSX, ReactNode } from "react";

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}

/**
 * @description
 * 再利用可能なTextコンポーネント
 * classNameプロパティを使ってスタイルを追加・上書きすることができる
 *
 * @param {string} [className] - 追加のCSSクラス
 * @param {ReactNode} children - テキストの内容
 * @param {HTMLProps<HTMLParagraphElement>} props - HTMLの標準的なpの属性
 * @returns {JSX.Element} - Textコンポーネント
 */
export default function Text({ children, className, ...props }: TextProps): JSX.Element {
  return (
    <p className={cn("text-sm md:text-base lg:text-lg", className)} {...props}>
      {children}
    </p>
  );
}
