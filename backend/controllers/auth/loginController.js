import verifyFirebaseToken from "../../services/auth/verifyFirebaseToken.js";
import getOrCreateUser from "../../services/user/getOrCreateUser.js";
import getOrCreateSession from "../../services/session/getOrCreateSession.js";

export default async function loginController(req, res) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Unauthorized");
    }

    const idToken = authHeader.substring(7);
    const firebaseUserId = await verifyFirebaseToken(idToken);

    const userData = await getOrCreateUser(firebaseUserId);
    if (!userData) {
      throw new Error("User not found or created");
    }

    const userId = userData.userId;

    if (!userId) {
      throw new Error("User ID is missing");
    }

    const sessionData = await getOrCreateSession(userId);

    if (!sessionData) {
      throw new Error("Session not found or created");
    }

    res.status(200).json({ sessionId: sessionData.sessionToken });
  } catch (error) {
    if (process.env.NODE_ENV !== "development") {
      console.error("Login error:", error);
    }
    return res.status(401).json({ error: "Unauthorized" });
  }
}
