import { Card, Image, Button } from 'antd';
import { Link } from 'react-router-dom';
import IProduct from '../../../types/IProduct';

import styles from './banner.module.css';

function BannerCards(products: IProduct[]) {
  return products.map((product: IProduct) => {
    const { gameTitle, price, headerImg, descriptionShort } = product;
    const url = `${headerImg}`.split('/');
    const gameID = url.pop();
    const baseURL = url.join('/');
    const capsuleSuffix = 'capsule_616x353.jpg';
    const capsule = `${baseURL}/${gameID}/${capsuleSuffix}`;
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <div className={styles.carouselItemCont}>
          <div className={styles.mask} />
          <Image
            preview={false}
            src={capsule}
            alt=""
            width="100%"
            className={styles.carouselItemImg}
          />
          <Card
            className={styles.carouselItemDesc}
          >
            <Card.Meta
              title={gameTitle}
              style={{ color: 'red' }}
            />
            <p>{descriptionShort}</p>
          </Card>
          <Button type="primary" className={styles.btn}>
            {`Add to cart: ${price}`}
          </Button>
        </div>
      </Link>
    );
  });
}

export default BannerCards;
