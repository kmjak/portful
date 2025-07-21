import cn from "@/utils/tailwindcss/cn";
import Link, { LinkProps as LinkType } from "next/link";
import { JSX, ReactNode } from "react";

interface LinkProps extends Omit<LinkType, "className"> {
  children: ReactNode;
  className?: string;
}

/**
 * @description 再利用可能なAnchorコンポーネント
 * @param {ReactNode} children - リンクの内容
 * @param {Url} href - リンク先のURL
 * @param {string} [className] - 追加のCSSクラス
 * @param {LinkProps} props - HTMLの標準的なリンク属性のprops
 * @returns {JSX.Element} - Anchorコンポーネント
 */
export default function Anchor({ children, href, className, ...props }: LinkProps): JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm sm:text-sm md:text-base lg:text-lg cursor-pointer hover:opacity-60 transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
