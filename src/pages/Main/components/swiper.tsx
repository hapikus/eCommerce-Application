// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperRef, SwiperClass } from "swiper/react";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// import './siper.css';

// // import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// export default function SwiperGallery() {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

//   return (
//     <>
//       <Swiper
//         spaceBetween={10}
//         navigation
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         // onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode
//         watchSlidesProgress
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
