import { prismaClient } from "../../lib/prisma/client.ts";

/**
 * @description
 * 新しくユーザーを作成する関数
 *
 * @param firebaseUserId - FirebaseのユーザーID
 * @returns {Promise<Object|null>} ユーザーデータ、失敗した場合は null
 */
export default async function createUser(firebaseUserId: string) {
  const data = await prismaClient.user.create({
    data: {
      firebaseUserId,
    },
  });
  return data;
}
