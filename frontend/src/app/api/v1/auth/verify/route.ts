"server-only";

import { auth } from "@/client/lib/firebase";
import { applyActionCode, checkActionCode } from "firebase/auth";
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
  try {
    const searchParams: URLSearchParams = request.nextUrl.searchParams;
    const oobCode: string = searchParams.get("oobCode") || "";
    const apiKey: string = searchParams.get("apiKey") || "";
    const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";

    if (!oobCode || !apiKey) {
      throw new Error("oobCode または apiKey がありません。");
    }

    if (apiKey !== firebaseApiKey) {
      throw new Error("無効な apiKey です。");
    }

    await checkActionCode(auth, oobCode);
    await applyActionCode(auth, oobCode);

    return NextResponse.redirect(new URL("/client/verify/success", request.url));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error applying action code:", error);
    }
    return NextResponse.redirect(new URL("/client/verify/failure", request.url));
  }
}
