import { Card, Image, Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './banner.module.css';
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
  return products.map((product: IProduct) => {
    const { gameTitle, price, headerImg, discountPrice } = product;
    const url = `${headerImg}`.split('/');
    const gameID = url.pop();
    const baseURL = url.join('/');
    const headerSuffix = 'header.jpg';
    const header = `${baseURL}/${gameID}/${headerSuffix}`;
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <div className={styles.discountCardContainer}>
          <Card
            hoverable
            bodyStyle={{ background: 'transperant' }}
            style={{ background: 'transperant', boxShadow: 'none' }}
            bordered={false}
            key={gameTitle}
            className={styles.discountCard}
            cover={(
              <Image
                preview={false}
                src={header}
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.discountPrice}>
              <div className={styles.discCardDiscPrice}>
                {`-${Number(
                  Math.ceil((1 - (discountPrice || 0) / price) * 100),
                )}%`}
              </div>
              <Button type="primary" className={styles.btnDisc}>
                {getDescription(price, discountPrice)}
              </Button>
            </div>
          </Card>
        </div>
      </Link>
    );
  });
}

export default DiscountCards;
