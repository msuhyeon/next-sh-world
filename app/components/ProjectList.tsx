import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";

const project = [
  {
    title: "PR 사이트(Next.js)",
    period: "2025.01",
    subtitle: "Next.js + TypeScript 기반의 SSR 포트폴리오 사이트 ",
    description: [
      "반응형 설계로 데스크톱 및 모바일 환경 최적화  ",
      "Swiper.js를 활용한 프로젝트 스크린샷 슬라이더 적용 ",
      "Vercel을 통한 간편 배포 및 호스팅",
    ],
    screenshot: [],
  },
  {
    title: "날씨 요정의 추천",
    period: "2025.02",
    subtitle: "포트폴리오용 웹 사이트",
    description: [
      "OpenWeather API를 활용하여 실시간 날씨 정보를 제공",
      "Next.js SSR(Server-Side Rendering)을 적용하여 SEO를 강화하고 초기 콘텐츠를 서버에서 미리 제공",
      "React Query로 API 데이터 캐싱하여 API 호출 수 50% 감소",
      "Zustand로 상태 관리하여 지역별 날씨 조회 UX 개선",
    ],
    screenshot: [
      "https://next-sh-world.vercel.app/onestop_main.png",
      "https://next-sh-world.vercel.app/onestop_pay.png",
      "https://next-sh-world.vercel.app/onestop_event.png",
    ],
  },
  {
    title: "PR 사이트",
    period: "2024.08",
    subtitle: "포트폴리오용 웹 사이트(Nuxt.js)",
    description: [
      "OpenWeather API를 활용하여 실시간 날씨 정보를 제공",
      "Next.js SSR(Server-Side Rendering)을 적용하여 SEO를 강화하고 초기 콘텐츠를 서버에서 미리 제공",
      "React Query로 API 데이터 캐싱하여 API 호출 수 50% 감소",
      "Zustand로 상태 관리하여 지역별 날씨 조회 UX 개선",
    ],
    video: "https://next-sh-world.vercel.app/nuxt_portfolio.webp",
  },
];

const ProjectList = () => {
  return (
    <section className={styles.projectSection}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectContainer}>
        {project.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
