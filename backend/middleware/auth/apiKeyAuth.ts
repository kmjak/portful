import { hostApiKey } from "../../config/host/hostApiKey.ts";
import { Request, Response, NextFunction } from "express";

export function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.header("X-API-KEY");

  if (!apiKey || apiKey !== hostApiKey) {
    res.status(401).json({ message: "Unauthorized: API key is invalid" });
    return;
  }

  next();
}
