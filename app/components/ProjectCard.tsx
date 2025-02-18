"use client";

// import { Swiper, SwiperSlide} from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import useDeviceSize from "@/hooks/useDeviceSize";
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
  const { isDesktop, isMobile } = useDeviceSize();

  return (
    <>
      {/* PC에서는 카드형 리스트 */}
      {isDesktop && (
        <div className={styles.projectCard}>
          <div className={styles.projectThumbnail}>
            {project.screenshot && (
              <Image src={project.screenshot[0]} alt="" fill />
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
            <ul>
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
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className={styles.projectSwiper}>
          {/* 모바일에서는 Swiper 적용 */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
          ></Swiper>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
