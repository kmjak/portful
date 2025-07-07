/**
 * @class PrivateKey
 * @description FirebaseのPrivate Keyを表すValue Object
 * @property {string} value - FirebaseのPrivate Keyの値
 */
export class PrivateKey {
  private readonly value: string;

  /**
   * @description コンストラクタ
   * @param {string} value - FirebaseのPrivate Keyの値
   */
  public constructor(value: string) {
    this.value = value.replace(/\\n/g, "\n");
  }

  /**
   * @description FirebaseのPrivate Keyのインスタンスを生成するメソッド
   * @param {string} value - FirebaseのPrivate Keyの値
   * @returns {PrivateKey} - PrivateKeyインスタンス
   */
  public static of(value: string): PrivateKey {
    this.validate(value);
    return new PrivateKey(value);
  }

  /**
   * @description Private Keyの値を返すメソッド
   * @returns {string} - FirebaseのPrivate Keyの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description Private Keyの値を検証するメソッド
   * @param {string} value - 検証するFirebaseのPrivate Key
   * @throws {Error} - Private Keyが空の場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("Firebase private key is required and cannot be empty.");
    }
  }
}
