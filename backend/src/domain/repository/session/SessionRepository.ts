import { CurrentDate } from "@/domain/model/common";
import { Session, SessionToken } from "@/domain/model/session";
import { UserId } from "@/domain/model/user";

/**
 * @description SessionRepositoryは、セッションに関するデータ操作を定義するインターフェース
 */
export interface SessionRepository {
  createSession(
    sessionToken: SessionToken,
    userId: UserId,
    currentDate: CurrentDate
  ): Promise<Session>;
  getActiveSessionByUserId(userId: UserId, currentDate: CurrentDate): Promise<Session | null>;
  updateSessionWithToken(sessionToken: SessionToken, currentDate: CurrentDate): Promise<Session>;
}
