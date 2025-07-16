import "reflect-metadata";
import "./container";
import { LoginControllerImpl } from "@/interface/controller/auth/LoginControllerImpl";
import express from "express";
import { createServer } from "http";
import { container } from "tsyringe";
import { apiKeyAuth } from "./interface/middleware/apiKeyAuth";

const app = express();
const server = createServer(app);
const PORT: number = Number(process.env.PORT) || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const loginController = container.resolve(LoginControllerImpl);
app.post("/auth/login", apiKeyAuth, (req, res) => loginController.login(req, res));
