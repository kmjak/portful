import { hostApiKey } from "../../config/host/hostApiKey.js";

export function apiKeyAuth(req, res, next) {
  const apiKey = req.header("X-API-KEY");

  if (!apiKey || apiKey !== hostApiKey) {
    return res.status(401).json({ message: "Unauthorized: API key is invalid" });
  }

  next();
}
