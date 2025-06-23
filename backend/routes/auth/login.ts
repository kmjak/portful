import express from "express";
import { apiKeyAuth } from "../../middleware/auth/apiKeyAuth.ts";
import loginController from "../../controllers/auth/loginController.ts";

const loginRouter = express.Router();

loginRouter.post("/", apiKeyAuth, loginController);

export default loginRouter;
