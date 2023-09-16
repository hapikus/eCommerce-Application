import { useState } from 'react';
import { Card, Tag, Spin, Image, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ShoppingCartOutlined } from '@ant-design/icons';
import GetDisccount from '../../../components/shared/getDiscount';
import { RootState } from '../../../redux/store';

import IProduct from '../../../types/IProduct';
import styles from './catalogCard.module.css';

function CatalogCards(props: { products: IProduct[] }) {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 18000);
  };

  const { products } = props;

  const loadingCatalogProducts = useSelector(
    (state: RootState) => state.product.isLoadingCatalogProducts,
  );

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
                      icon={<ShoppingCartOutlined />}
                      loading={loadings[2]}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        enterLoading(2);
                      }}
                    />
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
