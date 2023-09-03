import { Carousel } from 'antd';

import styles from './banner.module.css';

import BannerCards from './bannerCards';
import IProduct from '../../../types/IProduct';

function BannerCarousel(products: IProduct[]) {
  return (
    <div className={styles.headerBlockContLeft}>
      <Carousel className={styles.imgCarousel} infinite={false}>
        {BannerCards(products)}
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
