"use client";

import ProjectCard from "./ProjectCard";
import styles from "@/styles/ProjectList.module.scss";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const project = [
  {
    title: "PR 사이트(현재 페이지)",
    period: "2025.01",
    subtitle: "Next.js + TypeScript 기반의 SSR 포트폴리오 사이트",
    description: [
      "반응형 설계로 데스크톱 및 모바일 환경 최적화  ",
      "Swiper.js를 활용한 프로젝트 스크린샷 슬라이더 적용 ",
      "Vercel을 통한 간편 배포 및 호스팅",
    ],
    screenshot: ["https://next-sh-world.vercel.app/next_pr.webp"],
  },
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
    screenshot: ["https://next-sh-world.vercel.app/weather_app.webp"],
  },
  {
    title: "PR 사이트",
    period: "2024.08",
    subtitle: "포트폴리오용 웹 사이트(Nuxt.js)",
    description: [
      "Nuxt.js와 Vue로 개발한 포트폴리오용 웹사이트",
      "Vercel의 서버리스 아키텍처를 적용하여 빌드 시간 최적화와 CDN 자동 배포를 실현개발 생산성과 배포 효율성 극대화",
    ],
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
      "JWT 기반 인증 시스템 구축으로 보안성과 사용자 관리 효율성 향상",
      "반응형 UI 구현을 통해 다양한 디바이스에서 최적화된 사용자 경험 제공",
      "Options API에서 Composition API로 마이그레이션하여 렌더링 성능 최적화 및 번들 크기 최소화로 애플리케이션 속도 개선",
    ],
    techStack: [],
    demoUrl: "https://mir2-onestop.mironline.co.kr/",
    // screenshot: [
    //   "https://next-sh-world.vercel.app/mir2_onestop_main.webp",
    //   "https://next-sh-world.vercel.app/mir2_onestop_pay.webp",
    //   "https://next-sh-world.vercel.app/mir2_onestop_event.webp",
    // ],
    video: "https://next-sh-world.vercel.app/mir2_onestop.webp",
  },
];

const ProjectList = () => {
  const { isDesktop, isMobile } = useDeviceSize();

  return (
    <section className={styles.projectSection}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectContainer}>
        {/* PC에서는 카드형 리스트 */}
        {isDesktop &&
          project.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        {/* 모바일에서는 Swiper 적용 */}
        {isMobile && (
          <>
            <Swiper
              modules={[Pagination]}
              loop={true}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {project.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* 커스터마이징한 네비게이션 버튼 */}
            {/* <button className="swiper-button-prev">Prev</button>
            <button className="swiper-button-next">Next</button> */}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
