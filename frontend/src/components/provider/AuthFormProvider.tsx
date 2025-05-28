"use client";

import { AuthFormData } from "@/types/auth/shared";
import { JSX, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface AuthFormProviderProps {
  children: ReactNode;
}

/**
 * @description
 * 認証フォームのためのコンテキストプロバイダー
 *
 * @param {ReactNode} children - 子コンポーネント
 * @returns {JSX.Element} - AuthFormProviderコンポーネント
 */
export default function AuthFormProvider({ children }: AuthFormProviderProps): JSX.Element {
  const methods = useForm<AuthFormData>({
    mode: "all",
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
