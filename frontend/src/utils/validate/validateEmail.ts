import { EmailValidationMessage } from "@/types/validate/EmailValidationMessage";

interface ValidateEmailProps {
  readonly email: string;
}
/**
 * @description
 * メールアドレスのバリデーションを行う関数
 *
 * @param {string} email - バリデーション対象のメールアドレス
 * @returns {EmailValidationMessage} - バリデーション結果
 */
export default function validateEmail({ email }: ValidateEmailProps): EmailValidationMessage {
  if (email.includes(" ")) return EmailValidationMessage.NoSpace;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return EmailValidationMessage.InvalidFormat;
  return EmailValidationMessage.Success;
}
