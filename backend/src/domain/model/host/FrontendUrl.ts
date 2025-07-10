/**
 * @class FrontendUrl
 * @description Frontend URLのvalueオブジェクト
 * @property {string} value - Frontend URLの値
 */
export class FrontendUrl {
  /**
   * @description コンストラクタ
   * @param {string} value - Frontend URLの値
   */
  private constructor(private readonly value: string) {}

  /**
   * @description Frontend URLのインスタンスを生成するメソッド
   * @param {string} value - Frontend URLの値
   * @returns {FrontendUrl} - FrontendUrlインスタンス
   */
  public static of(value: string): FrontendUrl {
    this.validate(value);
    return new FrontendUrl(value);
  }

  /**
   * @description Frontend URLの値を返すメソッド
   * @returns {string} - Frontend URLの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description Frontend URLの値を検証するメソッド
   * @param {string} value - 検証するFrontend URLの値
   * @throws {Error} - Frontend URLが空の場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("Frontend URL is required and cannot be empty.");
    }
  }
}
