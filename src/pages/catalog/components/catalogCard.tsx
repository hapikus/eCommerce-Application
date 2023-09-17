import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Tag, Spin, Image, Button, Tooltip } from 'antd';
import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';

import GetDisccount from '../../../components/shared/getDiscount';
import store, { RootState } from '../../../redux/store';
import {
  addItemToBasket,
  getBasketItems,
} from '../../../redux/slice/basketSlice';

import IProduct from '../../../types/IProduct';
import styles from './catalogCard.module.css';

function CatalogCards(props: { products: IProduct[] }) {
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
  const loadingCatalogProducts = useSelector(
    (state: RootState) => state.product.isLoadingCatalogProducts,
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

  if (!products) {
    return null;
  }

  return (
    <Spin spinning={loadingCatalogProducts}>
      <div className={styles.catalogGridCards}>
        {products.map((product: IProduct) => {
          const {
            gameTitle,
            price,
            headerImg,
            discountPrice,
            descriptionShort,
          } = product;
          const url = `${headerImg}`.split('/');
          const gameID = url.pop();
          const baseURL = url.join('/');
          const headerSuffix = 'header.jpg';
          const header = `${baseURL}/${gameID}/${headerSuffix}`;
          return (
            <Link
              to={`/product/${gameTitle}`}
              key={gameTitle}
              className={styles.cardLinkContainer}
            >
              <div className={styles.catalogCardContainer}>
                <Card
                  hoverable
                  bodyStyle={{ padding: '5px' }}
                  className={styles.catalogCard}
                  cover={
                    <Image
                      preview={false}
                      src={header}
                      className={styles.catalogCardImg}
                      style={{ objectFit: 'cover' }}
                    />
                  }
                >
                  <Tooltip placement="topRight" title={gameTitle}>
                    <p className={styles.titleCard}>{gameTitle}</p>
                  </Tooltip>
                  <p className={styles.descCard}>{descriptionShort}</p>
                  <div className={styles.catalogCardDesc}>
                    <Tag style={{ padding: '5px 15px' }}>
                      <GetDisccount
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
                        isItemLoading ||
                        isAdding ||
                        itemsNameState.includes(gameTitle)
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
              </div>
            </Link>
          );
        })}
      </div>
    </Spin>
  );
}

export default CatalogCards;
