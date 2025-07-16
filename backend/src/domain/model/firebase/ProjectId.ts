/**
 * @class ProjectId
 * @description FirebaseのProject IDを表すValue Object
 * @property {string} value - FirebaseのProject ID
 */
export class ProjectId {
  /**
   * @description コンストラクタ
   * @param {string} value - FirebaseのProject ID
   */
  private constructor(private readonly value: string) {}

  /**
   * @description FirebaseのProject IDのインスタンスを生成するメソッド
   * @param {string} value - FirebaseのProject ID
   * @returns {ProjectId} - ProjectIdインスタンス
   */
  public static of(value: string): ProjectId {
    this.validate(value);
    return new ProjectId(value);
  }

  /**
   * @description Project IDの値を返すメソッド
   * @returns {string} - FirebaseのProject IDの値
   */
  public getValue(): string {
    return this.value;
  }

  /**
   * @description Project IDの値を検証するメソッド
   * @param {string} value - 検証するFirebaseのProject ID
   * @throws {Error} - Project IDが空の場合にエラーをスロー
   */
  private static validate(value: string): void {
    if (!value || value.trim() === "") {
      throw new Error("Firebase project ID is required and cannot be empty.");
    }
  }
}
