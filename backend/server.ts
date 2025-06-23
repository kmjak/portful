import { PORT } from "./config/env/port.ts";
import "./lib/env/dotenv.ts";
import { app, server } from "./lib/express/expressServer.ts";
import authRouter from "./routes/auth/auth.ts";

app.use("/auth", authRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
