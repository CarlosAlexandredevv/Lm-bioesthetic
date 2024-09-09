import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-h-[400px]"
      >
        <SwiperSlide>
          <img src="src\assets\pexels-eberhardgross-691668.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\pexels-eberhardgross-691668.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\pexels-eberhardgross-691668.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\pexels-eberhardgross-691668.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
