import { Card, Image, Button, Tag } from 'antd';
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
      <div className={styles.discountCardContainer} key={gameTitle}>
        <Card
          hoverable
          bodyStyle={{ background: 'transperant' }}
          style={{ background: 'transperant', boxShadow: 'none' }}
          bordered={false}
          key={gameTitle}
          className={styles.discountCard}
          cover={(
            <Link to={`/product/${gameTitle}`} key={gameTitle}>
              <Image
                preview={false}
                src={header}
                alt=""
                style={{ objectFit: 'cover' }}
              />
            </Link>
          )}
        >
          <div className={styles.discountPrice}>
            <Tag color="green">
              {`-${Number(
                Math.ceil((1 - (discountPrice || 0) / price) * 100),
              )}%`}
            </Tag>
            <Button type="primary" onClick={(e) => e.stopPropagation()} className={styles.btnDisc} href="/super-store-s2/#/login">
              {getDescription(price, discountPrice)}
            </Button>
          </div>
        </Card>
      </div>
    );
  });
}

export default DiscountCards;
