import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JSX } from "react";
import "./globals.css";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portful",
    default: "Portful",
  },
  description:
    "エンジニア特化の就活プラットフォームPortful。学生・学校・企業を繋ぎ、成績連携であなたのスキルを証明。未来のキャリアに繋がる出会いを創出します。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-gray-200 bg-neutral-900 select-none`}
      >
        <Header />
        <main className="mx-6 md:mx-10 lg:mx-20">{children}</main>
      </body>
    </html>
  );
}
