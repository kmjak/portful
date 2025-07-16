import dotenv from "dotenv";

/**
 * @class EnvLoader
 * @description 環境変数をロードするクラス
 */
export class EnvLoader {
  private static isLoaded = false;

  /**
   * @description 環境変数をロードするメソッド
   * @returns {void}
   */
  public static load(): void {
    if (EnvLoader.isLoaded) {
      return;
    }

    const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
    dotenv.config({ path: envFile });

    EnvLoader.isLoaded = true;
  }
}
