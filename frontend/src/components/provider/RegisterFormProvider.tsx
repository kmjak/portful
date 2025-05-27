"use client";

import { AuthFormData } from "@/types/auth/shared";
import { JSX, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface RegisterFormProviderProps {
  children: ReactNode;
}

/**
 * @description
 * RegisterFormProviderは、新規登録フォームの状態をグローバルに管理するためのプロバイダー
 *
 * @param {ReactNode} children - 子コンポーネント
 * @returns {JSX.Element} - RegisterFormProviderコンポーネント
 */
export default function RegisterFormProvider({ children }: RegisterFormProviderProps): JSX.Element {
  const methods = useForm<AuthFormData>({
    mode: "all",
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
