import { ApiKey } from "./ApiKey";
import { FrontendUrl } from "./FrontendUrl";

/**
 * @class HostConfig
 * @description Host用の設定を保持するEntity
 * @property {FrontendUrl} frontendUrl - FrontendのURL
 * @property {ApiKey} apiKey - APIキー
 */
export class HostConfig {
  /**
   * @description コンストラクタ
   * @param {FrontendUrl} frontendUrl - FrontendのURL
   * @param {ApiKey} apiKey - APIキー
   */
  private constructor(
    private readonly frontendUrl: FrontendUrl,
    private readonly apiKey: ApiKey
  ) {}

  /**
   * @description HostConfigのインスタンスを生成するメソッド
   * @param {FrontendUrl} frontendUrl - FrontendのURL
   * @param {ApiKey} apiKey - APIキー
   * @returns {HostConfig} - HostConfigのインスタンス
   *
   * @remarks
   * 各Value Object側でバリデーションを行っているため、
   * HostConfig内での追加バリデーションは不要。
   */
  public static create(frontendUrl: FrontendUrl, apiKey: ApiKey): HostConfig {
    return new HostConfig(frontendUrl, apiKey);
  }

  /**
   * @description FrontendのURLのインスタンスを取得するメソッド
   * @returns {FrontendUrl} - FrontendのURLのインスタンス
   */
  public getFrontendUrl(): FrontendUrl {
    return this.frontendUrl;
  }

  /**
   * @description FrontendのURLの値を取得するメソッド
   * @returns {string} - FrontendのURLの値
   */
  public getFrontendUrlValue(): string {
    return this.frontendUrl.getValue();
  }

  /**
   * @description APIキーのインスタンスを取得するメソッド
   * @returns {ApiKey} - APIキーのインスタンス
   */
  public getApiKey(): ApiKey {
    return this.apiKey;
  }

  /**
   * @description APIキーの値を取得するメソッド
   * @returns {string} - APIキーの値
   */
  public getApiKeyValue(): string {
    return this.apiKey.getValue();
  }
}
