import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2028 日月潭環潭大賽車 | Sun Moon Lake Grand Circuit",
  description: "亞洲首場環湖公路賽車，33 公里日月潭環湖賽道，GT3 級距 + 電動方程式。2028 年 10 月 20-22 日，速度與寧靜的極致碰撞。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+TC:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
