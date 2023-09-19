import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Carousel, Image, Spin, Tag } from 'antd';

import { CheckOutlined } from '@ant-design/icons';
import styles from './discount.module.css';

import IProduct from '../../../types/IProduct';
import GetDiscount from '../../../components/shared/getDiscount';
import store, { RootState } from '../../../redux/store';
import {
  addItemToBasket,
  getBasketItems,
} from '../../../redux/slice/basketSlice';

function DiscountCarousel(props: {
  products: IProduct[];
  productsNum: number;
}) {
  const { products, productsNum } = props;

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
    <div className={styles.categoryContainer}>
      <h2>POPULAR DISCOUNT GAMES</h2>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={productsNum}
        dots={{ className: styles.carouselDots }}
      >
        {products.map((product: IProduct) => {
          const { gameTitle, price, headerImg, discountPrice } = product;
          const url = `${headerImg}`.split('/');
          const gameID = url.pop();
          const baseURL = url.join('/');
          const headerSuffix = 'header.jpg';
          const header = `${baseURL}/${gameID}/${headerSuffix}`;
          return (
            <div className={styles.discountCardContainer} key={gameTitle}>
              <Card
                hoverable
                bodyStyle={{ background: 'transperant' }}
                style={{ background: 'transperant', boxShadow: 'none' }}
                bordered={false}
                key={gameTitle}
                className={styles.discountCard}
                cover={
                  <Link to={`/product/${gameTitle}`} key={gameTitle}>
                    <Image
                      preview={false}
                      src={header}
                      alt=""
                      style={{ objectFit: 'cover' }}
                    />
                  </Link>
                }
              >
                <div className={styles.discountPrice}>
                  <Tag color="green" style={{ padding: '6px 10px', marginInlineEnd: '0px' }}>
                    {`-${Number(
                      Math.ceil((1 - (discountPrice || 0) / price) * 100),
                    )}%`}
                  </Tag>
                  <Button
                    className={styles.dicbtn}
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
                        <GetDiscount
                          priceDesc={price}
                          discountPriceDesc={discountPrice}
                        />
                      )}
                    </Spin>
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default DiscountCarousel;
