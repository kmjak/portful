import express from "express";
import { apiKeyAuth } from "../../middleware/auth/apiKeyAuth.js";
import { admin } from "../../lib/firebase/firebaseAdmin.js";

const loginRouter = express.Router();

loginRouter.post("/", apiKeyAuth, async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const idToken = authHeader.substring(7);
    if (!idToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    await admin.auth().verifyIdToken(idToken);

    console.log("User authenticated successfully");
    return res.status(200).json({ sessionId: "session" });
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
});

export default loginRouter;
