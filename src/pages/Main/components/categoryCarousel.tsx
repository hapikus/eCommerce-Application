import { Carousel } from 'antd';

import styles from './banner.module.css';
import CategoryCards from './categoryCards';

function CategoryCarousel(props : { categorys: string[], categoryShow: number }) {
  const { categorys, categoryShow } = props;
  console.log('carusel', categoryShow);
  return (
    <div className={styles.categoryContainer}>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={categoryShow}
      >
        {CategoryCards(categorys)}
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
