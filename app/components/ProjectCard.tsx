import ProjectScreenshotSlider from "./ProjectScreenshotSlider";
import styles from "./ProjectCard.module.scss";

interface Project {
  title: string;
  period: string;
  subtitle: string;
  description: string[];
  screenshot: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <span className={styles.period}>{project.period}</span>
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
          {project.screenshot.length > 0 && (
            <ProjectScreenshotSlider images={project.screenshot} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
