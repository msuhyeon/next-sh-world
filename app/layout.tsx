import type { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import "./reset.css";
import "./globals.css";
import styles from "@/layout.module.scss";
import MainFooter from "./components/MainFooter";

export const metadata: Metadata = {
  title: "Next SH World",
  description:
    "🚀 Developer Portfolio & Resume | Next.js 기반 개인 이력서 웹사이트",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio made by NextJS",
    siteName: "next-sh-world",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <MainHeader />
          <main className={styles.mainContents}>{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
