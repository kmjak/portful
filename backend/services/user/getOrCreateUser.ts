import createUser from "../../models/user/createUser.js";
import getUserWithFid from "../../models/user/getUserWithFid.js";

/**
 * @description
 * FirebaseのユーザーIDを使用して、ユーザーデータを取得する関数
 * もしユーザーデータが存在しない場合は、新しくユーザーを作成する
 *
 * @param firebaseUserId - FirebaseのユーザーID
 * @returns {Promise<Object>} ユーザーデータ
 */
export default async function getOrCreateUser(firebaseUserId: string) {
  let userData = await getUserWithFid(firebaseUserId);
  if (userData === null) {
    userData = await createUser(firebaseUserId);
  }

  return userData;
}
