import { ApiKey, FrontendUrl, HostConfig } from "@/domain/model/host";
import { HostConfigProvider } from "@/domain/provider/host/HostConfigProvider";

/**
 * @class EnvHostConfigProvider
 * @description 環境変数からホストの設定を提供するクラス
 */
export class EnvHostConfigProvider implements HostConfigProvider {
  /**
   * @description 環境変数からホストの設定を読み込み、HostConfigを返す。
   * @returns {HostConfig} HostConfig - ホストの設定
   * @throws {Error} - 環境変数が設定されていない場合
   */
  public load(): HostConfig {
    const frontendUrl = FrontendUrl.of(process.env.FRONTEND_URL || "");
    const apiKey = ApiKey.of(process.env.HOST_X_API_KEY || "");

    return HostConfig.create(frontendUrl, apiKey);
  }
}
