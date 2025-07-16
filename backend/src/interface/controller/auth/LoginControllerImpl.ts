import { LoginController } from "@/interface/controller/auth/LoginController";
import { LoginUseCase } from "@/usecase/auth/LoginUseCase";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

/**
 * @class LoginControllerImpl
 * @description ユーザーログインを処理するコントローラー
 */
@injectable()
export class LoginControllerImpl implements LoginController {
  /**
   * @constructor
   * @param {LoginUseCase} loginUseCase - ユーザーログインのユースケース
   */
  constructor(@inject("LoginUseCase") private loginUseCase: LoginUseCase) {}

  /**
   * @description ユーザーログインを処理するメソッド
   * @param {Request} req - Expressのリクエストオブジェクト
   * @param {Response} res - Expressのレスポンスオブジェクト
   * @returns {Promise<void>} レスポンスを返す
   */
  async login(req: Request, res: Response): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    try {
      const { sessionToken } = await this.loginUseCase.execute(authHeader.substring(7));
      res.status(200).json({ sessionId: sessionToken });
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
      res.status(401).json({ error: "Unauthorized" });
    }
  }
}
