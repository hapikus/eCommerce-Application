import { Carousel, Image } from 'antd';

import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

function ImgCarousel(productDataState: IProduct) {
  const { screenshotList } = productDataState;
  return (
    <div className={styles.headerBlockContLeft}>
      <Carousel className={styles.imgCarousel} autoplay>
        {screenshotList.slice(0, 7).map((imageUrl) => (
          <div className={styles.imgCarouselCont} key={imageUrl}>
            <div className={styles.centerVertically}>
              <Image
                src={imageUrl}
                alt=""
                style={{ objectFit: 'cover' }}
                preview={false}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
