import styles from "./MainFooter.module.css";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <a href="mailto:job.maengsh@gmail.com">Contact Me</a>
        </p>
        <p>©{new Date().getFullYear()} Suhyeon Maeng All rights reserved.</p>
      </div>
    </footer>
  );
}
