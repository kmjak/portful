import { prismaClient } from "../../lib/prisma/client.js";

/**
 * @description
 * アクティブなセッションデータを取得する関数
 *
 * @param userId - ユーザーID
 * @param oneWeekAgo - 現在から1週間前の日付
 * @param currentDate - 現在の日付
 *
 * @returns {Promise<Object|null>} アクティブなセッションのデータ、存在しない場合は null
 */
export default async function getActiveSession(
  userId: number,
  oneWeekAgo: Date,
  currentDate: Date
) {
  const sessionData = await prismaClient.session.findFirst({
    where: {
      userId,
      lastAccessed: {
        gte: oneWeekAgo,
      },
      expiresAt: {
        gte: currentDate,
      },
    },
  });
  return sessionData;
}
