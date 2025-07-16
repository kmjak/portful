/**
 * @class LastAccessed
 * @description 最終アクセス日時を表すクラス
 * @property {Date} value - 最終アクセス日時の値
 */
export class LastAccessed {
  /**
   * @description コンストラクタ
   * @param {Date} value - 最終アクセス日時の値
   */
  private constructor(private readonly value: Date) {}

  /**
   * @description LastAccessedのインスタンスを生成するメソッド
   * @param {Date} value - 最終アクセス日時の値
   * @returns {LastAccessed} - LastAccessedインスタンス
   */
  public static of(value: Date): LastAccessed {
    this.validate(value);
    return new LastAccessed(value);
  }

  /**
   * @description 最終アクセス日時の値を返すメソッド
   * @returns {Date} - 最終アクセス日時の値
   */
  public getValue(): Date {
    return this.value;
  }

  /**
   * @description 最終アクセス日時の値を検証するメソッド
   * @param {Date} value - 検証する最終アクセス日時の値
   * @throws {Error} - 最終アクセス日時が無効な場合にエラーをスロー
   */
  private static validate(value: Date): void {
    if (!(value instanceof Date)) {
      throw new Error("LastAccessed must be a valid Date object.");
    }
    if (isNaN(value.getTime())) {
      throw new Error("LastAccessed must be a valid date.");
    }
  }
}
