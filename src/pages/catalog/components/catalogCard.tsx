import { Card, Tag, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

import styles from './component.module.css';
import IProduct from '../../../types/IProduct';

function CatalogCards(props: { products: IProduct[] }) {
  const { products } = props;

  const loadingCatalogProducts = useSelector(
    (state: RootState) => state.product.isLoadingCatalogProducts,
  );

  const getDescription = (
    priceDesc: number,
    discountPriceDesc: number | null,
  ) => {
    if (discountPriceDesc) {
      return (
        <div className={styles.catalogCardTwoPrice}>
          <div className={styles.catalogCardRegPrice}>
            {`${Number(priceDesc).toFixed(2)} €`}
          </div>
          <div className={styles.catalogCardDiscPrice}>
            {`${Number(discountPriceDesc).toFixed(2)} €`}
          </div>
        </div>
      );
    }
    return (
      <div className={styles.catalogCardOnePrice}>
        <div className={styles.catalogCardNormalPrice}>
          {`${Number(priceDesc).toFixed(2)} €`}
        </div>
      </div>
    );
  };

  if (!products) {
    return null;
  }
  return (
    <Spin spinning={loadingCatalogProducts}>
      <div className={styles.catalogGridCards}>
        {products.map((product: IProduct) => {
          const { gameTitle, price, headerImg, discountPrice } = product;
          const url = `${headerImg}`.split('/');
          const gameID = url.pop();
          const baseURL = url.join('/');
          const headerSuffix = 'header.jpg';
          const header = `${baseURL}/${gameID}/${headerSuffix}`;
          return (
            <Link to={`/product/${gameTitle}`} key={gameTitle}>
              <div className={styles.catalogCardContainer}>
                <Card
                  hoverable
                  bodyStyle={{ padding: '9px' }}
                  className={styles.catalogCard}
                  cover={<img alt={gameTitle} src={header} />}
                >
                  <p className={styles.titleCard}>{gameTitle}</p>
                  <div className={styles.catalogCardDesc}>
                    {/* <Card.Meta description={gameTitle} /> */}
                    <Tag>{getDescription(price, discountPrice)}</Tag>
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
