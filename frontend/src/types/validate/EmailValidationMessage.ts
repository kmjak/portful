/**
 * @description
 * メールアドレスのバリデーションメッセージを定義する列挙型
 *
 * @property {string} NoSpace - スペースを含めないでください
 * @property {string} InvalidFormat - メールアドレスの形式が正しくありません
 * @property {string} Success - 成功メッセージ
 */
export enum EmailValidationMessage {
  NoSpace = "スペースを含めないでください",
  InvalidFormat = "メールアドレスの形式が正しくありません",
  Success = "success",
}
