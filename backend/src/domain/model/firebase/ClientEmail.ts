/**
 * @class ClientEmail
 * @description FirebaseのClient Emailを表すValue Object
 * @property {string} value - FirebaseのClient Email
 */
export class ClientEmail {
  /**
   * @description コンストラクタ
   * @param {string} value - FirebaseのClient Email
   */
  private constructor(private readonly value: string) {}

  /**
   * @description FirebaseのClient Emailのインスタンスを生成するメソッド
   * @param {string} value - FirebaseのClient Email
   * @returns {ClientEmail} - ClientEmailインスタンス
   */
  public static of(value: string): ClientEmail {
    this.validate(value);
    return new ClientEmail(value);
  }

  /**
   * @description Client Emailの値を返すメソッド
   * @returns {string} - FirebaseのClient Emailの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description Client Emailの値を検証するメソッド
   * @param {string} value - 検証するFirebaseのClient Email
   * @throws {Error} - Client Emailが空の場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("Firebase client email is required and cannot be empty.");
    }
  }
}
