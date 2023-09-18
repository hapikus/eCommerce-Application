import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Image, Button, Tag, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';

import styles from './banner.module.css';
import store, { RootState } from '../../../redux/store';
import {
  addItemToBasket,
  getBasketItems,
} from '../../../redux/slice/basketSlice';
import IProduct from '../../../types/IProduct';

function DiscountCards(products: IProduct[]) {
  const getDescription = (
    priceDesc: number,
    discountPriceDesc: number | null,
  ) => {
    if (discountPriceDesc) {
      return (
        <div className={styles.discCardTwoPrice}>
          <div className={styles.discCardRegPrice}>
            {`${Number(priceDesc).toFixed(2)} €`}
          </div>
          <div className={styles.discCardDiscPrice}>
            {`${Number(discountPriceDesc).toFixed(2)} €`}
          </div>
        </div>
      );
    }
    return (
      <div className={styles.discCardOnePrice}>
        <div className={styles.discCardNormalPrice}>
          {`${Number(priceDesc).toFixed(2)} €`}
        </div>
      </div>
    );
  };

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

  return products.map((product: IProduct) => {
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
            <Tag color="green">
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
                isItemLoading || isAdding || itemsNameState.includes(gameTitle)
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
        </Card>
      </div>
    );
  });
}

export default DiscountCards;
