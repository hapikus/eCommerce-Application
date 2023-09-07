import { Carousel, Image } from 'antd';

import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

interface ImgCarouselProps {
  productData: IProduct;
}

function ImgCarousel({ productData }: ImgCarouselProps) {
  const { screenshotList } = productData;
  const slicedScreenshotList = screenshotList.slice(0, 7);

  return (
    <div className={styles.headerBlockContLeft}>
      <Image.PreviewGroup>
        <Carousel
          className={styles.imgCarousel}
          infinite={false}
          dots={{ className: styles.carouselDots }}
          autoplay
        >
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
