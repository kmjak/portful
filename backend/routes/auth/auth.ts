import { Router } from "express";
import loginRouter from "./login.js";

const authRouter = Router();

authRouter.use("/login", loginRouter);

export default authRouter;
