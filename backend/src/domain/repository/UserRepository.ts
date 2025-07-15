import { FirebaseUserId, User } from "@/domain/model/user";

/**
 * @description UserRepositoryは、ユーザーに関するデータ操作を定義するインターフェース
 */
export interface UserRepository {
  getUserWithFirebaseUserId(firebaseUserId: FirebaseUserId): Promise<User | null>;
  createUser(firebaseUserId: FirebaseUserId): Promise<User>;
}
