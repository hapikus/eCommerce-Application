import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperClass, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './siper.css';


function Test () {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const swiperElRef = useRef<SwiperRef>(null);

  return (
    <>
    <Swiper
    spaceBetween={10}
    navigation
    ref={swiperElRef}
    thumbs={{ swiper: thumbsSwiper }}
    modules={[FreeMode, Navigation, Thumbs]}
    className="mySwiper2"
  >
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
    </SwiperSlide>
  </Swiper>
  <Swiper
    onSwiper={(swiper) => setThumbsSwiper(swiper)}
    spaceBetween={10}
    slidesPerView={2}
    freeMode
    watchSlidesProgress
    modules={[FreeMode, Navigation, Thumbs]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
    </SwiperSlide>
  </Swiper>
  </>
  )
};

export default Test;

