"use client";

// import { Swiper, SwiperSlide} from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
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
    <>
      <div className={styles.projectCard}>
        <div className={styles.projectThumbnail}>
          {project.screenshot && (
            <Image src={project.screenshot[0]} alt="project screenshot" fill />
          )}
          {project.video && (
            <Image src={project.video} alt={`${project.title} preview`} fill />
          )}{" "}
          {!project.video && !project.screenshot && (
            <div className={styles.noImage}>
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.subtitle}</p>
          <ul className={styles.projectSummary}>
            {project.description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className={styles.techStack}>
            {/* {project.stack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))} */}
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
      </div>
      {/* <div className={styles.projectSwiper}>
        <div className={styles.projectCard}>
          <div className={styles.projectThumbnail}>
            {project.screenshot && (
              <Image
                src={project.screenshot[0]}
                alt="proejct screenshot"
                fill
              />
            )}
            {project.video && (
              <Image
                src={project.video}
                alt={`${project.title} preview`}
                fill
              />
            )}{" "}
            {!project.video && !project.screenshot && (
              <div className={styles.noImage}>
                <span>No Image</span>
              </div>
            )}
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.subtitle}</p>
            <ul className={styles.projectSummary}>
              {project.description.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className={styles.techStack}>
              //  {project.stack.map((tech, index) => (
              //     <span key={index}>{tech}</span>
              //   ))} 
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
        </div>
      </div> */}
    </>
  );
};

export default ProjectCard;
