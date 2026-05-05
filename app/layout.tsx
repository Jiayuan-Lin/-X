import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "印途 X / into X",
  description: "一个将旅途记忆转化为个性纪念物概念的互动展示网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const fontVariables = {
    "--font-body":
      '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", "Microsoft YaHei", sans-serif',
    "--font-display":
      '"Songti SC", "STSong", "Source Han Serif SC", "Noto Serif CJK SC", serif',
  } as CSSProperties;

  return (
    <html lang="zh-CN">
      <body style={fontVariables}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
