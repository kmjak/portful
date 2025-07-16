import { Request, Response } from "express";

/**
 * @description ユーザーログインを処理するコントローラーのインターフェース
 */
export interface LoginController {
  login(req: Request, res: Response): Promise<void>;
}
