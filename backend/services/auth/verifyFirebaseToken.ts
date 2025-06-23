import { admin } from "../../lib/firebase/firebaseAdmin.ts";

/**
 * @description
 * FirebaseのIDトークンを検証し、ユーザーIDを取得する関数
 *
 * @param idToken - FirebaseのIDトークン
 * @returns - ユーザーID
 */
export default async function verifyFirebaseToken(idToken: string) {
  try {
    const { user_id: firebaseUserId } = await admin.auth().verifyIdToken(idToken);

    if (typeof firebaseUserId !== "string") {
      throw new Error("Unauthorized");
    }

    return firebaseUserId;
  } catch (error) {
    if (process.env.NODE_ENV !== "development") {
      console.error("Firebase token verification error:", error);
    }
    throw new Error("Unauthorized");
  }
}
