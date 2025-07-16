/**
 * @class CreatedAt
 * @description ユーザー作成日時のvalueオブジェクト
 * @property {Date} value - 作成日時の値
 */
export class CreatedAt {
  /**
   * @description コンストラクタ
   * @param {Date} value - 作成日時の値
   */
  private constructor(private readonly value: Date) {}

  /**
   * @description CreatedAtのインスタンスを生成するメソッド
   * @param {Date} value - 作成日時の値
   * @returns {CreatedAt} - CreatedAtインスタンス
   */
  public static of(value: Date): CreatedAt {
    this.validate(value);
    return new CreatedAt(value);
  }

  /**
   * @description 作成日時の値を返すメソッド
   * @returns {Date} - 作成日時の値
   */
  public getValue(): Date {
    return this.value;
  }

  /**
   * @description 作成日時の値を検証するメソッド
   * @param {Date} value - 検証する作成日時の値
   * @throws {Error} - 作成日時が無効な場合にエラーをスロー
   */
  private static validate(value: Date): void {
    if (!(value instanceof Date)) {
      throw new Error("CreatedAt must be a valid Date object.");
    }
    if (isNaN(value.getTime())) {
      throw new Error("CreatedAt must be a valid date.");
    }
  }
}
