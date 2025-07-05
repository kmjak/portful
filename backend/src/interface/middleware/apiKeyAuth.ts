import { ApiKeyAuthUseCase } from "@/usecase/middleware/ApiKeyAuthUseCase";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

/**
 * @description X-API-KEYのAPIキーの認証を行うミドルウェア
 * @param {Request} req - Expressのリクエストオブジェクト
 * @param {Response} res - Expressのレスポンスオブジェクト
 * @param {NextFunction} next - Expressの次のミドルウェアを呼び出す関数
 * @returns {void}
 * @throws {Error} - APIキーが無効な場合は401 Unauthorizedを返す
 */
export function apiKeyAuth(req: Request, res: Response, next: NextFunction): void {
  const apiKey = req.header("X-API-KEY");
  if (apiKey === undefined) {
    res.status(401).json({ message: "Unauthorized: API key is missing" });
    return;
  }

  const apiKeyAuthUseCase = container.resolve(ApiKeyAuthUseCase);
  const isValid = apiKeyAuthUseCase.execute(apiKey);
  if (isValid === false) {
    res.status(401).json({ message: "Unauthorized: API key is invalid" });
    return;
  }

  next();
}
