import { Carousel } from 'antd';

import styles from './banner.module.css';
import CategoryCards from './categoryCards';

function CategoryCarousel(props: { genres: string[]; categoryShow: number }) {
  const { genres, categoryShow } = props;
  return (
    <div className={styles.categoryContainer}>
      <h2>POPULAR CATEGORY</h2>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={categoryShow}
        dots={{ className: styles.carouselDots }}
      >
        {CategoryCards(genres)}
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
