import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import IProduct from '../../../types/IProduct';

import styles from './banner.module.css';

function BannerCards(products: IProduct[]) {

  return products.map((product: IProduct) => {
    const { gameTitle, headerImg, descriptionShort } =
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
            bordered={false}
            className={styles.carouselItemDesc}
            title={<span className={styles.bannerCardTitle}>{gameTitle}</span>}
          >
            <p>{descriptionShort}</p>
          </Card>
        </div>
      </Link>
    );
  });
}

export default BannerCards;
