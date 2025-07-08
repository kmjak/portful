/**
 * @description UserIdは、ユーザーを一意に識別するためのIDを表すValue Object
 * @class UserId
 */
export class UserId {
  /**
   * @description コンストラクタ
   * @param value - ユーザーIDの値
   */
  private constructor(private readonly value: string) {}

  /**
   * @description UserIdのインスタンスを生成するメソッド
   * @param value - ユーザーIDの値
   * @returns {UserId} UserIdのインスタンス
   */
  public static of(value: string): UserId {
    this.validate(value);
    return new UserId(value);
  }

  /**
   * @description ユーザーIDの値を返すメソッド
   * @returns {string} ユーザーIDの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description ユーザーIDの値を検証するメソッド
   * @throws {Error} ユーザーIDが空または無効な場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() !== "") {
      throw new Error("User ID is required and cannot be empty.");
    }
  }
}
