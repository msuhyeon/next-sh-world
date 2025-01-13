import type { Metadata } from "next";
import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next SH World",
  description:
    "🚀 Developer Portfolio & Resume | Next.js 기반 개인 이력서 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
