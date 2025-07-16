/**
 * @class ExpiresAt
 * @description セッション有効期限を表すValue Object
 * @property {Date} value - セッション有効期限の日時
 */
export class ExpiresAt {
  /**
   * @description コンストラクタ
   * @param {Date} value - セッション有効期限の日時
   */
  private constructor(private readonly value: Date) {}

  /**
   * @description ExpiresAtのインスタンスを生成するメソッド
   * @param {Date} value - セッション有効期限の日時
   * @returns {ExpiresAt} - ExpiresAtインスタンス
   */
  public static of(value: Date): ExpiresAt {
    this.validate(value);
    return new ExpiresAt(value);
  }

  /**
   * @description セッション有効期限の日時を返すメソッド
   * @returns {Date} - セッション有効期限の日時
   */
  public getValue(): Date {
    return this.value;
  }

  /**
   * @description セッション有効期限の日時を検証するメソッド
   * @param {Date} value - 検証するセッション有効期限の日時
   * @throws {Error} - 有効期限が無効な場合にエラーをスロー
   */
  private static validate(value: Date): void {
    if (!(value instanceof Date)) {
      throw new Error("ExpiresAt must be a valid Date object.");
    }

    if (isNaN(value.getTime())) {
      throw new Error("ExpiresAt must be a valid date.");
    }

    const now = new Date();
    if (value <= now) {
      throw new Error("ExpiresAt must be a future date.");
    }
  }
}
