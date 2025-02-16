import Image from "next/image";
import ProjectScreenshotSlider from "./ProjectScreenshotSlider";
import styles from "./ProjectCard.module.scss";

interface Project {
  title: string;
  period: string;
  subtitle: string;
  description: string[];
  screenshot?: string[];
  video?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.period}>{project.period}</p>
      <div className={styles.cardContents}>
        <div className={styles.cardTextContents}>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <ul className={styles.description}>
            {project.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className={styles.cardImgContents}>
          {project.screenshot && (
            <ProjectScreenshotSlider images={project.screenshot} />
          )}
          {project.video && (
            <Image
              src={project.video}
              alt={`${project.title} preview`}
              width={800}
              height={450}
              layout="responsive" // 반응형 크기 자동 조절
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
