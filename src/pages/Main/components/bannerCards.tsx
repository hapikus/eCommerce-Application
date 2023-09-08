import { Card, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import IProduct from '../../../types/IProduct';

import styles from './banner.module.css';

function BannerCards(products: IProduct[]) {
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
    const { gameTitle, price, headerImg, descriptionShort, discountPrice } =
      product;
    const url = `${headerImg}`.split('/');
    const suffix = url.pop();
    const gameID = url.pop();
    const baseURL = url.join('/');
    const capsuleSuffix = 'capsule_616x353.jpg';
    const headerSuffix = 'header.jpg';
    const capsule = `${baseURL}/${gameID}/${capsuleSuffix}`;
    const header = `${suffix}/${gameID}/${headerSuffix}`;
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <div className={styles.carouselItemCont}>
          <div className={styles.mask} />
          <Image
            src={capsule}
            alt="CAPSULE"
            width="100%"
            style={{ height: '100%' }}
            preview={{
              src: `${header}`,
            }}
            className={styles.carouselItemImg}
          />
          <Card
            className={styles.carouselItemDesc}
            title={<span className={styles.bannerCardTitle}>{gameTitle}</span>}
          >
            <p>{descriptionShort}</p>
          </Card>
          <Button type="primary" onClick={(e) => e.stopPropagation()} className={styles.btn} href="/super-store-s2/#/login">
            {getDescription(price, discountPrice)}
          </Button>
        </div>
      </Link>
    );
  });
}

export default BannerCards;
