import Image from "next/image";
import styles from "@/styles/ProjectCard.module.scss";
import Link from "next/link";

interface Project {
  title: string;
  period: string;
  subtitle: string;
  description: string[];
  screenshot?: string[];
  video?: string;
  github?: string;
  demoUrl?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectContents}>
        <div className={styles.projectThumbnailWrapper}>
          {project.screenshot && (
            <Image
              className={styles.projectThumbnail}
              src={project.screenshot[0]}
              alt="project screenshot"
              fill
            />
          )}
          {project.video && (
            <Image
              className={styles.projectThumbnail}
              src={project.video}
              alt={`${project.title} preview`}
              fill
            />
          )}
          {!project.video && !project.screenshot && (
            <div className={styles.noImage}>
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectSubtitle}>{project.subtitle}</p>

          <ul className={styles.projectSummary}>
            {project.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.projectLinks}>
        {project.github && (
          <Link
            href={project.github}
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        )}
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            className={styles.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
