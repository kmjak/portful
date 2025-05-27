import { JSX, LabelHTMLAttributes, ReactNode } from "react";
import cn from "@/utils/tailwindcss/cn";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}
/**
 * @description
 * 再利用可能なLabelコンポーネント
 * classNameプロパティを使ってスタイルを追加・上書きすることができます
 * Inputコンポーネントと一緒に使用することを想定しており、
 * htmlForプロパティを使用して、特定のinput要素に関連付けることができます
 *
 * @param {string} [className] - 追加のCSSクラス
 * @param {ReactNode} children - ラベルの内容
 * @param {LabelHTMLAttributes<HTMLLabelElement>} props - HTMLの標準的なlabelの属性
 * @returns {JSX.Element} - Labelコンポーネント
 */

export default function Label({ children, className, ...props }: LabelProps): JSX.Element {
  return (
    <label
      className={cn(
        "text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl px-2 py-1 md:px-4 lg:py-2 rounded-md cursor-pointer select-none",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
