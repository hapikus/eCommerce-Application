import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Card, Image, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { CheckOutlined } from '@ant-design/icons';

import store, { RootState } from '../../../redux/store';
import {
  addItemToBasket,
  getBasketItems,
} from '../../../redux/slice/basketSlice';
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

  const basketIdState = useSelector(
    (state: RootState) => state.basket.basketId,
  );
  const isItemLoading = useSelector(
    (state: RootState) => state.basket.isGettingItem,
  );
  const isAdding = useSelector((state: RootState) => state.basket.isAdding);
  const itemsNameState = useSelector(
    (state: RootState) => state.basket.itemsGameName,
  );

  const itemsGameNameState = useSelector(
    (state: RootState) => state.basket.itemsGameName,
  );

  const addButtonHandle = async (gameTitleAdd: string) => {
    store.dispatch(
      addItemToBasket({
        basketId: basketIdState,
        gameTitle: gameTitleAdd,
      }),
    );
  };

  useEffect(() => {
    if (!isAdding && basketIdState !== '') {
      store.dispatch(getBasketItems(basketIdState));
    }
  }, [basketIdState, isAdding]);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation
        loop
        key="swiperMain"
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
            <SwiperSlide key={`main_${gameTitle}`}>
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
                    className="swiperButtn"
                    type="primary"
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                      addButtonHandle(gameTitle);
                    }}
                    disabled={
                      isItemLoading ||
                      isAdding ||
                      itemsNameState.includes(gameTitle)
                    }
                  >
                    <Spin spinning={isItemLoading || isAdding}>
                      {(itemsGameNameState || []).includes(gameTitle) ? (
                        <CheckOutlined />
                      ) : (
                        getDescription(price, discountPrice)
                      )}
                    </Spin>
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
        key="swiperThumbs"
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
            <div className="swiper-slide" data-pick={suffix} key={gameId}>
              <SwiperSlide key={`thumb_${gameTitle}`}>
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
