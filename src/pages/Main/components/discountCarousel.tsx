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
      <h2>POPULAR DISCOUNT GAMES</h2>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={productsNum}
        dots={{ className: styles.carouselDots }}
      >
        {DiscountCards(products)}
      </Carousel>
    </div>
  );
}

export default DiscountCarousel;
