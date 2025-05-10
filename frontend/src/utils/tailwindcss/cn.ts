import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description
 * clsxでクラス名を条件付きで結合し、
 * tailwind-mergeでクラスの競合を解消した結果を返す関数
 *
 * @param inputs - 結合するクラス名や条件付きクラス名のリスト
 * @returns 結合後に競合を解消したクラス名文字列
 */
export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
