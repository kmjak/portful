import { CurrentDate } from "@/domain/model/common";
import { SessionToken } from "@/domain/model/session";
import { SessionRepository } from "@/domain/repository/session/SessionRepository";
import { UserRepository } from "@/domain/repository/user/UserRepository";
import { FirebaseAuthService } from "@/infrastructure/firebase/FirebaseAuthService";
import { LoginUseCase } from "@/usecase/auth/LoginUseCase";
import { randomBytes } from "crypto";
import { inject, injectable } from "tsyringe";

/**
 * @class LoginUseCaseImpl
 * @description ユーザーログインを処理するユースケースの実装
 */
@injectable()
export class LoginUseCaseImpl implements LoginUseCase {
  /**
   * @constructor
   * @param {FirebaseAuthService} authService - Firebase認証サービス
   * @param {UserRepository} userRepository - ユーザーレポジトリ
   * @param {SessionRepository} sessionRepo - セッションレポジトリ
   */
  constructor(
    @inject("FirebaseAuthService") private authService: FirebaseAuthService,
    @inject("UserRepository") private userRepository: UserRepository,
    @inject("SessionRepository") private sessionRepo: SessionRepository
  ) {}

  /**
   * @description ユーザーログインを実行するメソッド
   * @param {string} idToken - Firebase IDトークン
   * @returns {Promise<{ sessionToken: string }>} セッショントークン
   * @throws {Error} - 認証に失敗した場合にエラーをスロー
   */
  async execute(idToken: string): Promise<{ sessionToken: string }> {
    const firebaseUserId = await this.authService.verifyIdToken(idToken);

    let user = await this.userRepository.getUserWithFirebaseUserId(firebaseUserId);
    if (!user) {
      user = await this.userRepository.createUser(firebaseUserId);
    }

    let session = await this.sessionRepo.getActiveSessionByUserId(
      user.getUserId(),
      CurrentDate.of(new Date())
    );
    if (!session) {
      const token = randomBytes(32).toString("hex");
      session = await this.sessionRepo.createSession(
        SessionToken.of(token),
        user.getUserId(),
        CurrentDate.of(new Date())
      );
    }

    return { sessionToken: session.getSessionTokenValue() };
  }
}
