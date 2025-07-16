/**
 * @description FirebaseUserIdは、Firebaseでユーザーを一意に識別するためのIDを表すValue Object
 * @class FirebaseUserId
 */
export class FirebaseUserId {
  /**
   * @description コンストラクタ
   * @param value - Firebase User IDの値
   */
  private constructor(private readonly value: string) {}

  /**
   * @description FirebaseUserIdのインスタンスを生成するメソッド
   * @param value - Firebase User IDの値
   * @returns {FirebaseUserId} FirebaseUserIdのインスタンス
   */
  public static of(value: string): FirebaseUserId {
    this.validate(value);
    return new FirebaseUserId(value);
  }

  /**
   * @description Firebase User IDの値を返すメソッド
   * @returns {string} Firebase User IDの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description Firebase User IDの値を検証するメソッド
   * @throws {Error} Firebase User IDが空または無効な場合にエラーを投げる
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("Firebase User ID is required and cannot be empty.");
    }
  }
}
