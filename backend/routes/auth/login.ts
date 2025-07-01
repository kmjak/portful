import express from "express";
import { apiKeyAuth } from "../../middleware/auth/apiKeyAuth.js";
import loginController from "../../controllers/auth/loginController.js";

const loginRouter = express.Router();

loginRouter.post("/", apiKeyAuth, loginController);

export default loginRouter;
