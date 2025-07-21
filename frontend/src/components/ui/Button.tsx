import { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import cn from "@/utils/tailwindcss/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

/**
 * @description
 * 再利用可能なButtonコンポーネント
 * classNameプロパティを使ってスタイルを追加・上書きすることができます
 *
 * @param {ReactNode} children - ボタン内部に表示する内容
 * @param {string} [className] - 追加のCSSクラス
 * @param {ButtonProps} props - HTMLの標準的なボタン属性のprops
 * @returns {JSX.Element} - Buttonコンポーネント
 */
export default function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        "outline-none text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl px-3 py-2 md:px-5 lg:px-6 rounded-md border border-gray-700 hover:border-gray-400 bg-gray-800 opacity-80 hover:opacity-100 active:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
