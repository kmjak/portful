import { prismaClient } from "../../lib/prisma/client.ts";

/**
 * @description
 * 新しいセッションを作成する関数
 *
 * @param sessionToken - セッショントークン
 * @param userId - ユーザーID
 * @param oneMonthFromNow - 現在から1ヶ月後の日付
 *
 * @returns {Promise<Object>} 新しいセッションのデータ
 */
export default async function createSession(
  sessionToken: string,
  userId: number,
  oneMonthFromNow: Date
) {
  const newSession = await prismaClient.session.create({
    data: {
      sessionToken,
      userId,
      expiresAt: oneMonthFromNow,
    },
  });
  return newSession;
}
