"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./ProjectScreenshotSlider.module.scss";

const ProjectScreenshotSlider = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Image
            src={src}
            alt={`Screenshot ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectScreenshotSlider;
