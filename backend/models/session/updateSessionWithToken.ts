import { prismaClient } from "../../lib/prisma/client.js";

/**
 * @description
 * sessionのlastAccessedを更新する関数
 *
 * @param sessionToken - セッショントークン
 * @param currentDate - 現在の日付
 * @return {Promise<Object>} 更新されたセッションのデータ
 */
export default async function updateSessionWithToken(sessionToken: string, currentDate: Date) {
  const session = await prismaClient.session.update({
    where: {
      sessionToken,
    },
    data: {
      lastAccessed: currentDate,
    },
  });

  return session;
}
