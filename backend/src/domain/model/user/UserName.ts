/**
 * @class UserName
 * @description ユーザー名のvalueオブジェクト
 * @property {string | null} value - ユーザー名の値もしくはnull
 */
export class UserName {
  /**
   * @description コンストラクタ
   * @param {string | null} value - ユーザー名の値もしくはnull
   */
  private constructor(private readonly value: string | null) {}

  /**
   * @description UserNameのインスタンスを生成するメソッド
   * @param {string | null} value - ユーザー名の値もしくはnull
   * @returns {UserName} - UserNameインスタンス
   */
  public static of(value: string | null): UserName {
    this.validate(value);
    return new UserName(value);
  }

  /**
   * @description ユーザー名の値を返すメソッド
   * @returns {string | null} - ユーザー名の値もしくはnull
   */
  public getValue(): string | null {
    return this.value;
  }

  /**
   * @description ユーザー名の値を検証するメソッド
   * @param {string | null} value - 検証するユーザー名の値
   * @throws {Error} - ユーザー名が空文字の場合にエラーをスロー
   */
  private static validate(value: string | null): void {
    if (value === null) {
      return;
    }

    if (!value || value.trim() === "") {
      throw new Error("Name is required and cannot be empty.");
    }
  }
}
