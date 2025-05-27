/**
 * @description
 * 認証に必要なデータを格納するインターフェース
 *
 * @property {string} email - ユーザーのメールアドレス
 * @property {string} password - ユーザーのパスワード
 * @property {string} confirmPassword - ユーザーのパスワードの確認用
 */

export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword: string;
}
