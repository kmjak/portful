import { injectable, inject } from "tsyringe";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";
import { ApiKey } from "@/domain/model/host";

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
   */
  public execute(apiKey: string): boolean {
    const hostConfig = this.hostConfigProvider.load();
    const envApiKey = hostConfig.getApiKey();

    return envApiKey.equals(ApiKey.of(apiKey));
  }
}
