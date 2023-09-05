import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import IProduct from '../../../types/IProduct';

import styles from '../product.module.css';

function RandomCards(props: { products: IProduct[]; randomCards: number }) {
  const { products, randomCards } = props;
  const getDescription = (priceDesc: number, discountPriceDesc: number | null) => {
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

  return products.slice(0, randomCards).map((product: IProduct) => {
    const { gameTitle, screenshotList, price, discountPrice } = product;
    const randomIndex = Math.floor(Math.random() * screenshotList.length);
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={(
            <Image
              alt="example"
              src={screenshotList[randomIndex]}
              height={200}
              style={{ objectFit: 'cover' }}
              preview={false}
            />
          )}
        >
          <Card.Meta
            className={styles.cardBottom}
            title={gameTitle}
            description={getDescription(price, discountPrice)}
          />
        </Card>
      </Link>
    );
  });
}

export default RandomCards;
