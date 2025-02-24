import Link from "next/link";
import styles from "@/styles/MainFooter.module.scss";

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
            href="https://www.notion.so/Fullstack-Developer-165abd807c8180c5a84fd2af8f89bde4?pvs=4"
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
