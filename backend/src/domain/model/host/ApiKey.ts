/**
 * @class ApiKey
 * @description API Keyのvalueオブジェクト
 * @property {string} value - API Keyの値
 */
export class ApiKey {
  /**
   * @description コンストラクタ
   * @param {string} value - API Keyの値
   */
  public constructor(private readonly value: string) {}

  /**
   * @description API Keyのインスタンスを生成するメソッド
   * @param {string} value - API Keyの値
   * @returns {ApiKey} - ApiKeyインスタンス
   */
  public static of(value: string): ApiKey {
    this.validate(value);
    return new ApiKey(value);
  }

  /**
   * @description API Keyの値を比較するメソッド
   * @param {ApiKey} other - 比較対象のApiKeyインスタンス
   * @returns {boolean} - 値が等しい場合はtrue、そうでない場合はfalse
   */
  public equals(other: ApiKey): boolean {
    if (!(other instanceof ApiKey)) {
      return false;
    }
    return this.value === other.value;
  }

  /**
   * @description API Keyの値を返すメソッド
   * @returns {string} - API Keyの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description API Keyの値を検証するメソッド
   * @param {string} value - 検証するAPI Keyの値
   * @throws {Error} - API Keyが空の場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("API Key is required and cannot be empty.");
    }
  }
}
