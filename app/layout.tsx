import type { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import "./globals.css";
import styles from "@/layout.module.css";
import MainFooter from "./components/MainFooter";

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
        <div className={styles.layout}>
          <MainHeader />
          <main className={styles.mainContents}>{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
