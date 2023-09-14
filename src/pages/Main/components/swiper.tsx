import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Card, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import IProduct from '../../../types/IProduct';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import './swiper.css';

function SwiperMain(props: { products: IProduct[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>();

  const getDescription = (
    priceDesc: number,
    discountPriceDesc: number | null,
  ) => {
    if (discountPriceDesc) {
      return (
        <div className="discCardTwoPrice">
          <div className="discCardRegPrice">
            {`${Number(priceDesc).toFixed(2)} €`}
          </div>
          <div className="discCardDiscPrice">
            {`${Number(discountPriceDesc).toFixed(2)} €`}
          </div>
        </div>
      );
    }
    return (
      <div className="discCardOnePrice">
        <div className="discCardNormalPrice">
          {`${Number(priceDesc).toFixed(2)} €`}
        </div>
      </div>
    );
  };

  const { products } = props;

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation
        loop
        slidesPerView="auto"
        autoHeight
        pagination={{
          clickable: true,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {products.map((product: IProduct) => {
          const {
            gameTitle,
            price,
            headerImg,
            descriptionShort,
            discountPrice,
          } = product;
          const url = `${headerImg}`.split('/');
          const suffix = url.pop();
          const gameId = url.pop();
          const baseURL = url.join('/');
          const capsuleSuffix = 'capsule_616x353.jpg';
          const headerSuffix = 'header.jpg';
          const capsule = `${baseURL}/${gameId}/${capsuleSuffix}`;
          const header = `${baseURL}/${gameId}/${headerSuffix}`;
          return (
            <SwiperSlide>
              <Link to={`/product/${gameTitle}`} key={gameTitle}>
                <div className="mask" />
                <Image
                  src={capsule}
                  alt="CAPSULE"
                  width="100%"
                  style={{ height: '100%' }}
                  preview={{
                    src: `${header}`,
                  }}
                  title={suffix}
                  className="carouselItemImg"
                />
                <div className="swiperDiscCont">
                  <Card
                    bordered={false}
                    className="carouselItemDesc"
                    title={<span className="bannerCardTitle">{gameTitle}</span>}
                  >
                    <div className="swiperDescWrapper">{descriptionShort}</div>
                  </Card>
                  <Button
                    type="primary"
                    onClick={(e) => e.stopPropagation()}
                    className="btn"
                    href="/super-store-s2/#/login"
                  >
                    {getDescription(price, discountPrice)}
                  </Button>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        direction="vertical"
        freeMode
        autoHeight
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {products.map((product: IProduct) => {
          const { gameTitle, headerImg } = product;
          const url = `${headerImg}`.split('/');
          const suffix = url.pop();
          const gameId = url.pop();
          const baseURL = url.join('/');
          const headerSuffix = 'header.jpg';
          const header = `${baseURL}/${gameId}/${headerSuffix}`;
          return (
            <div className="swiper-slide" data-pick={suffix}>
              <SwiperSlide>
                <img src={header} alt={gameTitle} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperMain;
