import WorkExperience from "./components/WorkExperience";
import styles from "./page.module.css";
import Image from "next/image";
import { FaCode, FaBolt, FaUsers } from "react-icons/fa";

import Profile from "../public/pic.jpeg";

export default function Home() {
  return (
    <>
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
              안녕하세요! <br /> 사용자 경험을 구현하는 FE개발자&nbsp;
              <span className={styles.textName}>맹수현</span>입니다.
            </h2>
            <ul className={styles.descriptionWrapper}>
              <li className={styles.description}>
                Vue와 React를 활용하여 <strong>빠르고 직관적인</strong> 웹
                애플리케이션을 개발합니다.
              </li>
              <li className={styles.description}>
                <strong>성능 최적화와 코드 품질 향상</strong>을 위해 지속적으로
                고민합니다.
              </li>
              <li className={styles.description}>
                대규모 프로젝트 경험을 바탕으로
                <strong>확장성과 유지보수성을 고려한 개발</strong>을 지향합니다.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.skills}>
            <div className={styles.skillBox}>
              <h3 className={styles.h3Title}>
                <FaCode className={styles.icon} />
                Frontend 기술
              </h3>

              <ul>
                <li>
                  Vue.js 애플리케이션에서 JWT 인증과 RSA 암호화를 통해 보안을
                  강화
                </li>
                <li>
                  Options API를 Composition API로 리팩토링하여 코드의
                  유지보수성과 가독성을 개선
                </li>
                <li>Vite를 활용하여 효율적인 개발 환경과 빌드 시스템을 구축</li>
              </ul>
            </div>
            <div className={styles.skillBox}>
              <h3 className={styles.h3Title}>
                <FaBolt className={styles.icon} />
                UI/UX 설계 및 사용자 중심 개발
              </h3>
              <ul>
                <li>
                  디자인 기반의 UI를 구현하여 사용자 경험을 최우선으로 고려
                </li>
                <li>디자이너 및 기획자와 협업하여 최적의 사용자 경험을 제공</li>
              </ul>
            </div>
            <div className={styles.skillBox}>
              <h3 className={styles.h3Title}>
                {" "}
                <FaUsers className={styles.icon} />
                성능 최적화 및 협업
              </h3>
              <ul>
                <li>
                  Lighthouse를 활용하여 웹 성능을 측정하고, Lazy Loading을
                  적용하여 로딩 속도를 개선
                </li>
                <li>
                  GitHub PR 리뷰와 코드 컨벤션을 통해 협업의 효율성을 높임
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <WorkExperience />
    </>
  );
}
