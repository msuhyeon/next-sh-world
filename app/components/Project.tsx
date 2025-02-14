import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Project.module.css";

export default function Project() {
  return (
    <div className={styles.prjectWrapper}>
      <h3>Project</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
