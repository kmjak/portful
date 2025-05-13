/**
 * @description
 * パスワードのバリデーションメッセージを定義する列挙型
 *
 * @property {string} NoSpace - スペースを含めないでください
 * @property {string} RequireUppercase - 英大文字を1文字以上含めてください
 * @property {string} RequireLowercase - 英小文字を1文字以上含めてください
 * @property {string} RequireNumber - 数字を1文字以上含めてください
 * @property {string} RequireSymbol - 記号（@!#%&-=）を1文字以上含めてください
 * @property {string} MinLength - 8文字以上で入力してください
 * @property {string} Success - 成功メッセージ
 */
export enum PasswordValidationMessage {
  NoSpace = "スペースを含めないでください",
  RequireUppercase = "英大文字を1文字以上含めてください",
  RequireLowercase = "英小文字を1文字以上含めてください",
  RequireNumber = "数字を1文字以上含めてください",
  RequireSymbol = "記号（@!#%&-=）を1文字以上含めてください",
  MinLength = "8文字以上で入力してください",
  Success = "success",
}
