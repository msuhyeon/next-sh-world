import Link from "next/link";
import styles from "./MainFooter.module.css";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a className={styles.link} href="mailto:job.maengsh@gmail.com">
            Contact Me
          </a>
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
        <p>©{new Date().getFullYear()} Suhyeon Maeng All rights reserved.</p>
      </div>
    </footer>
  );
}
