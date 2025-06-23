import { prismaClient } from "../../lib/prisma/client.ts";

/**
 * @description
 * FirebaseのユーザーIDを使用して、ユーザーデータを取得する関数
 *
 * @param firebaseUserId - FirebaseのユーザーID
 * @returns {Promise<Object|null>} ユーザーデータ、存在しない場合は null
 */
export default async function getUserWithFid(firebaseUserId: string) {
  const userData = await prismaClient.user.findUnique({
    where: {
      firebaseUserId,
    },
  });

  return userData;
}
