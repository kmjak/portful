import { PasswordValidationMessage } from "@/client/types/validate";

interface ValidatePasswordProps {
  readonly password: string;
}
/**
 * @description
 * パスワードのバリデーションを行う関数
 *
 * @param {string} password - バリデーション対象のパスワード
 * @returns {PasswordValidationMessage} - バリデーション結果
 */
export default function validatePassword({
  password,
}: ValidatePasswordProps): PasswordValidationMessage {
  if (password.includes(" ")) return PasswordValidationMessage.NoSpace;
  if (!/[A-Z]/.test(password)) return PasswordValidationMessage.RequireUppercase;
  if (!/[a-z]/.test(password)) return PasswordValidationMessage.RequireLowercase;
  if (!/[0-9]/.test(password)) return PasswordValidationMessage.RequireNumber;
  if (!/[@!#%&\-=/]/.test(password)) return PasswordValidationMessage.RequireSymbol;
  if (password.length < 8) return PasswordValidationMessage.MinLength;

  return PasswordValidationMessage.Success;
}
