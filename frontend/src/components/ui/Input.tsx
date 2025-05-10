import { InputHTMLAttributes, JSX } from "react";
import cn from "@/utils/tailwindcss/cn";

/**
 * @description
 * 再利用可能なInputコンポーネント
 * classNameプロパティを使ってスタイルを追加・上書きすることができます
 *
 * @param {string} [className] - 追加のCSSクラス
 * @param {InputHTMLAttributes<HTMLInputElement>} props - HTMLの標準的なinput属性
 * @returns {JSX.Element} - Inputコンポーネント
 */
export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <input
      className={cn(
        "outline-none text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl w-36 sm:w-44 md:w-56 lg:w-72 px-2 py-1 md:px-4 lg:py-2 rounded-md border border-gray-700 hover:border-gray-400 bg-gray-800 opacity-80 hover:opacity-100 focus:opacity-100 active:opacity-80 transition-opacity duration-200 ease-in-out",
        className
      )}
      {...props}
    />
  );
}
