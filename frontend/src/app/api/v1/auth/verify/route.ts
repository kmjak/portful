"server-only";

import { auth } from "@/lib/firebase/firebase";
import { applyActionCode } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

/**
 * @description
 * メールアドレス認証のためのAPIエンドポイント
 * Firebaseのアクションコードを適用し、成功または失敗のページにリダイレクトする
 *
 * @param request - リクエストオブジェクト
 * @returns {Promise<NextResponse>} - レスポンスオブジェクト
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const oobCode = searchParams.get("oobCode");
  const apiKey = searchParams.get("apiKey");
  const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";

  if (!oobCode || !apiKey) {
    throw new Error("oobCode または apiKey がありません。");
  }

  if (apiKey !== firebaseApiKey) {
    throw new Error("無効な apiKey です。");
  }

  try {
    await applyActionCode(auth, oobCode);

    return NextResponse.redirect(new URL("/verify/success", request.url));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error applying action code:", error);
    }
    return NextResponse.redirect(new URL("/verify/failure", request.url));
  }
}
