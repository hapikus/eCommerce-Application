import { Carousel, Image } from 'antd';

import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

function ImgCarousel(productDataState: IProduct) {
  const { screenshotList } = productDataState;
  const slicedScreenshotList = screenshotList.slice(0, 7);

  return (
    <div className={styles.headerBlockContLeft}>
      <Image.PreviewGroup>
        <Carousel className={styles.imgCarousel} infinite={false} autoplay>
          {slicedScreenshotList.map((imageUrl) => (
            <div className={styles.imgCarouselCont} key={imageUrl}>
              <div className={styles.centerVertically}>
                <Image src={imageUrl} alt="" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
}

export default ImgCarousel;
