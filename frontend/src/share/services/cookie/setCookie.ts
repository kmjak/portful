"server-only";

import { cookies } from "next/headers";

interface SetCookieProps {
  readonly name: string;
  readonly value: string;
  readonly maxAge: number;
  readonly path: string;
}

/**
 * @description
 * クッキーを設定する関数
 *
 * @param {SetCookieProps} props - クッキーの設定情報
 * @param {string} props.name - クッキーの名前
 * @param {string} props.value - クッキーの値
 * @param {number} props.maxAge - クッキーの有効期限（秒）
 * @param {string} props.path - クッキーのパス
 *
 * @returns {Promise<boolean>} - クッキーの設定が成功した場合はtrue、失敗した場合はfalse
 */
export default async function setCookie({
  name,
  value,
  maxAge,
  path,
}: SetCookieProps): Promise<boolean> {
  try {
    if (!name || !value || !maxAge || !path) {
      throw new Error("クッキーの設定情報が不正です");
    }

    const cookieStore = await cookies();

    cookieStore.set({
      name,
      value,
      maxAge,
      path,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return true;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error setting cookie:", error);
    }
    return false;
  }
}
