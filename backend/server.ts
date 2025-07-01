import { PORT } from "./config/env/port.js";
import "./lib/env/dotenv.js";
import { app, server } from "./lib/express/expressServer.js";
import authRouter from "./routes/auth/auth.js";

app.use("/auth", authRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
