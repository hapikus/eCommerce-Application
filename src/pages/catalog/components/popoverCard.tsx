import { Image, Tag } from 'antd';
import { Link } from 'react-router-dom';

import styles from './popover.module.css';
import IProduct from '../../../types/IProduct';
import GetDiscount from '../../../components/shared/getDiscount';

function PopoverCards(props: { products: IProduct[] }) {
  const { products } = props;
  return products.map((product: IProduct) => {
    const { gameTitle, price, headerImg, discountPrice } = product;
    const url = `${headerImg}`.split('/');
    const gameID = url.pop();
    const baseURL = url.join('/');
    const headerSuffix = 'header.jpg';
    const header = `${baseURL}/${gameID}/${headerSuffix}`;
    return (
      <div className={styles.popoverContainer}>
        <Link
          to={`/product/${gameTitle}`}
          key={gameTitle}
          className={styles.popoverCardContainer}
        >
          <Image
            alt="example"
            src={header}
            height={60}
            width={140}
            style={{ objectFit: 'fill' }}
            preview={false}
          />
          <div className={styles.discountPricePop}>
            <p className={styles.titleCardPop}>{gameTitle}</p>
            <div className={styles.popoverCardDesc}>
              <Tag style={{ padding: '5px 15px' }}>
                <GetDiscount
                  priceDesc={price}
                  discountPriceDesc={discountPrice}
                />
              </Tag>
            </div>
          </div>
        </Link>
      </div>
    );
  });
}

export default PopoverCards;
