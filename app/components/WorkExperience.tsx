import Project from "./Project";
import styles from "./WorkExperience.module.css";

export default function WorkExperience(): JSX.Element {
  return (
    <section id="experience">
      <h2>📌 Work Experience</h2>
      <p>8년 5개월 경력의 프론트엔드 개발자</p>
      <Project />
    </section>
  );
}
