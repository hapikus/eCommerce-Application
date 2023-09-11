import { Card, Tag, Spin, Image } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import getDisccount from '../../../components/shared/getDiscount';
import { RootState } from '../../../redux/store';

import styles from './catalogCard.module.css';
import IProduct from '../../../types/IProduct';

function CatalogCards(props: { products: IProduct[] }) {
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
                  bodyStyle={{ padding: '9px' }}
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
                  <p className={styles.titleCard}>{gameTitle}</p>
                  <p className={styles.descCard}>{descriptionShort}</p>
                  <div className={styles.catalogCardDesc}>
                    <Tag>{getDisccount(price, discountPrice)}</Tag>
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
