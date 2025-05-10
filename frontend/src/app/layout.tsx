import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JSX } from "react";
import "./globals.css";

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
    template: "%s | Edolf Type",
    default: "Edolf Type",
  },
  description: "リアルタイム対戦型タイピングゲーム。お互いの選んだ文章を打ち合い、勝敗を競い合え！",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 text-gray-200 mx-6 md:mx-10 lg:mx-20`}
      >
        {children}
      </body>
    </html>
  );
}
