/**
 * @class UserId
 * @description ユーザーIDのvalueオブジェクト
 * @property {number} value - ユーザーIDの値
 */
export class UserId {
  /**
   * @description コンストラクタ
   * @param {number} value - ユーザーIDの値
   */
  private constructor(private readonly value: number) {}

  /**
   * @description UserIdのインスタンスを生成するメソッド
   * @param {number} value - ユーザーIDの値
   * @returns {UserId} - UserIdインスタンス
   */
  public static of(value: number): UserId {
    this.validate(value);
    return new UserId(value);
  }

  /**
   * @description ユーザーIDの値を返すメソッド
   * @returns {number} - ユーザーIDの値
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * @description ユーザーIDの値を検証するメソッド
   * @param {number} value - 検証するユーザーIDの値
   * @throws {Error} - ユーザーIDが無効な場合にエラーをスロー
   */
  private static validate(value: number): void {
    if (value <= 0) {
      throw new Error("User ID must be a positive integer.");
    }
    if (Number.isInteger(value) === false) {
      throw new Error("User ID must be an integer.");
    }
  }
}
