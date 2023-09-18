import { Button, Card, Image, Spin, Tag } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import IProduct from '../../../types/IProduct';

import store, { RootState } from '../../../redux/store';
import {
  addItemToBasket,
  getBasketItems,
} from '../../../redux/slice/basketSlice';

import styles from './gridCard.module.css';
import GetDiscount from '../../../components/shared/getDiscount';

function GridCard(props: {
  products: IProduct[];
  ramdomSwiperNum: number;
  randomCards: number;
}) {
  const { products, ramdomSwiperNum } = props;
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

  return products.slice(ramdomSwiperNum).map((product: IProduct) => {
    const { gameTitle, price, discountPrice, headerImg } = product;
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <Card
          hoverable
          style={{ width: '100%' }}
          className={styles.randomGridCard}
          cover={
            <Image
              alt="example"
              src={headerImg}
              height={200}
              style={{ objectFit: 'cover' }}
              preview={false}
            />
          }
        >
          <div className={styles.catalogCardDesc}>
            <Tag style={{ padding: '5px 15px' }}>
              <GetDiscount
                priceDesc={price}
                discountPriceDesc={discountPrice}
              />
            </Tag>
            <Button
              type="primary"
              onClick={(event) => {
                event.preventDefault();
                addButtonHandle(gameTitle);
              }}
              disabled={
                isItemLoading || isAdding || itemsNameState.includes(gameTitle)
              }
            >
              <Spin spinning={isItemLoading || isAdding}>
                {(itemsGameNameState || []).includes(gameTitle) ? (
                  <CheckOutlined />
                ) : (
                  <ShoppingCartOutlined />
                )}
              </Spin>
            </Button>
          </div>
        </Card>
      </Link>
    );
  });
}

export default GridCard;
