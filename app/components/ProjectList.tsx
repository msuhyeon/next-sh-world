import ProjectCard from "./ProjectCard";
import styles from "@/styles/ProjectList.module.scss";

const project = [
  // {
  //   title: "PR 사이트(Next.js)",
  //   period: "2025.01",
  //   subtitle: "Next.js + TypeScript 기반의 SSR 포트폴리오 사이트 ",
  //   description: [
  //     "반응형 설계로 데스크톱 및 모바일 환경 최적화  ",
  //     "Swiper.js를 활용한 프로젝트 스크린샷 슬라이더 적용 ",
  //     "Vercel을 통한 간편 배포 및 호스팅",
  //   ],
  //   screenshot: [],
  // },
  {
    title: "Weather wear",
    period: "2025.02",
    subtitle: "날씨 기반 의류 추천 웹 애플리케이션",
    description: [
      "OpenWeather API를 활용하여 실시간 날씨 정보 제공",
      "SSR을 적용하여 SEO를 강화하고 초기 컨텐츠를 서버에서 미리 제공",
      "React Query를 활용해 데이터 캐싱을 최적화하고 불필요한 중복 호출 방지",
      "Zustand로 상태 관리하여 지역별 날씨 조회 UX 개선",
    ],
    techStack: [],
    github: "https://github.com/msuhyeon/weather-wear",
    demoUrl: "https://weather-wear-theta.vercel.app/",
    // video: "https://next-sh-world.vercel.app/weatherwear.webp",
  },
  {
    title: "PR 사이트",
    period: "2024.08",
    subtitle: "포트폴리오용 웹 사이트(Nuxt.js)",
    description: ["Nuxt.js와 Vue로 개발한 포트폴리오용 웹사이트"],
    github: "https://github.com/msuhyeon/monorepo-template",
    demoUrl: "",
    video: "https://next-sh-world.vercel.app/nuxt_portfolio.webp",
  },
  {
    title: "게임 포털 사이트",
    period: "2024.08",
    subtitle: `미르의 전설 2와 관련된 다양한 서비스를 제공하는 포털 사이트입니다.
            회원 가입, 본인 인증, 고객 지원 등의 기능을 통해 편리한 게임 이용
            환경을 제공합니다.`,
    description: [
      "OpenWeather API를 활용하여 실시간 날씨 정보를 제공",
      "Next.js SSR(Server-Side Rendering)을 적용하여 SEO를 강화하고 초기 콘텐츠를 서버에서 미리 제공",
      "React Query로 API 데이터 캐싱하여 API 호출 수 50% 감소",
      "Zustand로 상태 관리하여 지역별 날씨 조회 UX 개선",
    ],
    techStack: [],
    demoUrl: "https://mir2-onestop.mironline.co.kr/",
    screenshot: [
      "https://next-sh-world.vercel.app/mir2_onestop_main.png",
      "https://next-sh-world.vercel.app/mir2_onestop_pay.png",
      "https://next-sh-world.vercel.app/mir2_onestop_event.png",
    ],
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
