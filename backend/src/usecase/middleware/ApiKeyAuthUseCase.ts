import { ApiKey } from "@/domain/model/host";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { inject, injectable } from "tsyringe";

/**
 * @class ApiKeyAuthUseCase
 * @description APIキーの認証を行うユースケース
 */
@injectable()
export class ApiKeyAuthUseCase {
  constructor(
    @inject("HostConfigProvider")
    private readonly hostConfigProvider: HostConfigProvider
  ) {}

  /**
   * @description APIキーを検証するメソッド
   * @param {string} apiKey - 検証するAPIキー
   * @returns {ApiKey} APIキーが有効な場合はtrue、無効な場合はfalseを返す
   * @throws {Error} - APIキーの検証に失敗した場合にエラーをスローする
   */
  public execute(apiKey: string): boolean {
    try {
      const hostConfig = this.hostConfigProvider.load();
      const envApiKey = hostConfig.getApiKey();

      return envApiKey.equals(ApiKey.of(apiKey));
    } catch (error) {
      throw new Error(`
        [ApiKeyAuthUseCase] APIキーの検証に失敗しました。
        ${error}
      `);
    }
  }
}
