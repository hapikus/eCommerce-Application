import { Card, Image, Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './component.module.css';
import IProduct from '../../../types/IProduct';

function CatalogCards(props: {
  products: IProduct[];
}) {
  const { products } = props;
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
  return products.map((product: IProduct) => {
    const { gameTitle, price, headerImg, discountPrice } = product;
    const url = `${headerImg}`.split('/');
    const gameID = url.pop();
    const baseURL = url.join('/');
    const headerSuffix = 'header.jpg';
    const header = `${baseURL}/${gameID}/${headerSuffix}`;
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <div className={styles.catalogtCardContainer}>
          <Card
            hoverable
            bodyStyle={{ background: 'transperant' }}
            style={{ background: 'transperant', boxShadow: 'none' }}
            bordered={false}
            key={gameTitle}
            className={styles.catalogCard}
            cover={(
              <Image
                preview={false}
                src={header}
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.catalogPrice}>
              <Button type="primary" className={styles.catalogBtn}>
                {getDescription(price, discountPrice)}
              </Button>
            </div>
          </Card>
        </div>
      </Link>
    );
  });
}

export default CatalogCards;
