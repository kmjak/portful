"server-only";

import { NextRequest, NextResponse } from "next/server";
import { backendUrl, backendApiKey } from "@/config/backend";
import { setCookie } from "@/services/cookie";

/**
 * @description
 * 認証API
 * Backendにリクエストを送り、認証を行う。
 * 成功した場合は、クッキーにセッションIDを保存する。
 *
 * @param request - リクエストオブジェクト
 * @returns {Promise<NextResponse>} - レスポンスオブジェクト
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    if (!backendUrl || !backendApiKey) {
      throw new Error("Backend URLもしくはAPIキーが設定されていません");
    }

    if (request.headers.get("Authorization") === null) {
      throw new Error("Authorizationヘッダーが設定されていません");
    }

    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorizationヘッダーが不正な値です");
    }

    const response: Response = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": backendApiKey,
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      throw new Error("認証に失敗しました");
    }

    const responseData = await response.json();
    const { sessionId } = responseData;

    if (!sessionId) {
      throw new Error("Session IDが取得できませんでした");
    }

    if (typeof sessionId !== "string") {
      throw new Error("Session IDが不正な値です");
    }

    const isCookieSet = await setCookie({
      name: "sessionId",
      value: sessionId,
      maxAge: 60 * 60 * 24 * 3,
      path: "/",
    });

    if (!isCookieSet) {
      throw new Error("クッキーの設定に失敗しました");
    }

    return NextResponse.json({ message: "認証成功" }, { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error in POST /api/v1/auth/login:", error);
    }
    return NextResponse.json({ message: "認証に失敗しました" }, { status: 500 });
  }
}
