import styles from "@/styles/MainHeader.module.scss";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.name}>Suhyeon Maeng</h1>
        <div className={styles.wrapper}>
          <h2 className={styles.subtitle}>Frontend Developer</h2>
        </div>
      </div>
    </header>
  );
}
