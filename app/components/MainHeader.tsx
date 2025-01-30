import React from "react";
import Link from "next/link";
import styles from "./MainHeader.module.css";

export default function MainHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Suhyeon Maeng</h1>
        <div className={styles.wrapper}>
          <h2 className={styles.subtitle}>Frontend Developer</h2>
          <div className={styles.links}>
            <Link
              className={styles.link}
              href="https://github.com/msuhyeon"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className={styles.link}
              href="https://pepper-yak-068.notion.site/f0a2e0e856c449d1a7197d48c46a6fad?pvs=4"
              target="_blank"
            >
              Resume
            </Link>
            <Link
              className={styles.link}
              href="https://velog.io/@msh/posts"
              target="_blank"
            >
              Velog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
