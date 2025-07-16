/**
 * @class CurrentDate
 * @description 現在日時を表すValue Object
 * @property {Date} value - 現在日時の値
 */
export class CurrentDate {
  /**
   * @description コンストラクタ
   * @param {Date} value - 現在日時の値
   */
  private constructor(private readonly value: Date) {}

  /**
   * @description CurrentDateのインスタンスを生成するメソッド
   * @param {Date} value - 現在日時の値
   * @returns {CurrentDate} - CurrentDateインスタンス
   */
  public static of(value: Date): CurrentDate {
    this.validate(value);
    return new CurrentDate(value);
  }

  /**
   * @description 現在日時の値を返すメソッド
   * @returns {Date} - 現在日時の値
   */
  public getValue(): Date {
    return this.value;
  }

  /**
   * @description 現在日時から指定した日数を引いた日時を取得するメソッド
   * @param {number} days - 引く日数
   * @returns {Date} - 指定した日数を引いた日時
   */
  public minusDays(days: number): Date {
    return new Date(this.value.getTime() - days * 24 * 60 * 60 * 1000);
  }

  /**
   * @description 現在日時に指定した日数を足した日時を取得するメソッド
   * @param {number} days - 足す日数
   * @returns {Date} - 指定した日数を足した日時
   */
  public plusDays(days: number): Date {
    return new Date(this.value.getTime() + days * 24 * 60 * 60 * 1000);
  }

  /**
   * @description 現在日時の値を検証するメソッド
   * @param {Date} date - 検証する日時の値
   * @throws {Error} - 日時が無効な場合にエラーをスロー
   */
  private static validate(date: Date): void {
    if (!(date instanceof Date)) {
      throw new Error("CurrentDate must be a valid Date object");
    }
    if (isNaN(date.getTime())) {
      throw new Error("Date must be a valid date object");
    }
  }
}
