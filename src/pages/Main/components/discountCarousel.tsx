import { Carousel } from 'antd';

import styles from './banner.module.css';
import DiscountCards from './discountCards';
import IProduct from '../../../types/IProduct';

function DiscountCarousel(props: {
  products: IProduct[];
  productsNum: number;
}) {
  const { products, productsNum } = props;
  return (
    <div className={styles.categoryContainer}>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={productsNum}
      >
        {DiscountCards(products)}
      </Carousel>
    </div>
  );
}

export default DiscountCarousel;
