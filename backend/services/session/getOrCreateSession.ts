import { randomBytes } from "crypto";
import createSession from "../../models/session/createSession.ts";
import getActiveSession from "../../models/session/getActiveSession.ts";
import updateSessionWithToken from "../../models/session/updateSessionWithToken.ts";

/**
 * @description
 * ユーザーIDを使用して、アクティブなセッションを取得または新規作成する関数
 *
 * @param userId - ユーザーID
 * @returns {Promise<Object>} セッションデータ
 */
export default async function getOrCreateSession(userId: number) {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.getTime() - 1000 * 60 * 60 * 24 * 7);
  const oneMonthFromNow = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 30);
  let sessionData = await getActiveSession(userId, oneWeekAgo, currentDate);

  if (sessionData === null) {
    const sessionToken = randomBytes(32).toString("hex");
    sessionData = await createSession(sessionToken, userId, oneMonthFromNow);
  } else {
    await updateSessionWithToken(sessionData.sessionToken, currentDate);
  }

  return sessionData;
}
