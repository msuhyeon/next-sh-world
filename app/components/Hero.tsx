import { FaCode, FaBolt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Hero.module.scss";
import Profile from "../../public/pic.jpeg";

export default function Hero() {
  return (
    <section id="about">
      <div className={styles.aboutContents}>
        <div className={styles.crayonBorder}>
          <Image
            className={styles.profile}
            src={Profile}
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.greeting}>
            <span className={styles.fadeInText}>안</span>
            <span className={styles.fadeInText}>녕</span>
            <span className={styles.fadeInText}>하</span>
            <span className={styles.fadeInText}>세</span>
            <span className={styles.fadeInText}>요</span>
            <br /> 프론트엔드 개발자&nbsp;
            <span className={styles.textName}>맹수현</span>입니다.
          </h2>
          <nav className={styles.navbar}>
            <Link
              href="https://github.com/msuhyeon"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              <span>GitHub</span>
            </Link>
            <Link
              href="https://pepper-yak-068.notion.site/f0a2e0e856c449d1a7197d48c46a6fad?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              <span>Resume</span>
            </Link>
            <Link
              href="https://velog.io/@msh/posts"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              <span>Velog</span>
            </Link>
          </nav>

          <ul className={styles.descriptionWrapper}>
            <li className={styles.description}>
              팀원들과 지속적으로 피드백을 주고받으며 함께 성장하는 것을
              중요하게 생각합니다.
            </li>
            <li className={styles.description}>
              사용자 경험을 더 나은 방향으로 개선하는 데 관심이 많아요.
            </li>
            <li className={styles.description}>
              복잡한 UI 로직을 단순화하면서 가독성과 유지보수성을 높이는 걸
              즐겨요.
            </li>
            <li className={styles.description}>
              기술 토론을 통해 더 좋은 솔루션을 찾는 과정에서 보람을 느껴요.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.skills}>
          <div className={styles.skillBox}>
            <h3 className={styles.h3Title}>
              <FaCode className={styles.icon} />
              Frontend 개발 역량
            </h3>
            <ul className={styles.introList}>
              <li className={styles.introItem}>
                Options API를 Composition API로 리팩토링하여 코드의 유지보수성과
                가독성을 개선했습니다.
              </li>
              <li className={styles.introItem}>
                Vite를 활용하여 효율적인 개발 환경과 빌드 시스템을 구축했습니다.
              </li>
            </ul>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.h3Title}>
              <FaBolt className={styles.icon} />
              사용자 중심 개발
            </h3>
            <ul>
              <li className={styles.introItem}>
                디자인 기반의 UI를 구현하여 사용자 경험을 최우선으로 고려합니다.
              </li>
              <li className={styles.introItem}>
                디자이너 및 기획자와 협업하여 최적의 사용자 경험을 제공합니다.
              </li>
            </ul>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.h3Title}>
              {" "}
              <FaUsers className={styles.icon} />
              성능 최적화 및 협업
            </h3>
            <ul>
              <li className={styles.introItem}>
                Lighthouse를 활용하여 웹 성능을 측정하고, Lazy Loading을
                적용하여 로딩 속도를 개선합니다.
              </li>
              <li className={styles.introItem}>
                GitHub PR 리뷰와 코드 컨벤션을 통해 협업의 효율성을 높입니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
