/**
 * @class SessionToken
 * @description セッショントークンを表すValue Object
 * @property {string} value - セッショントークンの値
 */
export class SessionToken {
  /**
   * @description コンストラクタ
   * @param {string} value - セッショントークンの値
   */
  private constructor(private readonly value: string) {}

  /**
   * @description SessionTokenのインスタンスを生成するメソッド
   * @param {string} value - セッショントークンの値
   * @returns {SessionToken} - SessionTokenインスタンス
   */
  public static of(value: string): SessionToken {
    this.validate(value);
    return new SessionToken(value);
  }

  /**
   * @description セッショントークンの値を返すメソッド
   * @returns {string} - セッショントークンの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description セッショントークンの値を検証するメソッド
   * @param {string} value - 検証するセッショントークンの値
   * @throws {Error} - セッショントークンが無効な場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("SessionToken must be a non-empty string.");
    }
  }
}
