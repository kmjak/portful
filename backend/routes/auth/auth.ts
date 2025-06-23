import { Router } from "express";
import loginRouter from "./login.ts";

const authRouter = Router();

authRouter.use("/login", loginRouter);

export default authRouter;
