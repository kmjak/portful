/**
 * @description LoginUseCaseのインターフェース
 */
export interface LoginUseCase {
  execute(idToken: string): Promise<{ sessionToken: string }>;
}
