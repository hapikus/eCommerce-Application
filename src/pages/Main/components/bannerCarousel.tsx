import { Carousel, Image, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import styles from './banner.module.css';

function BannerCarousel() {
  return (
    <div className={styles.headerBlockContLeft}>
      <Image.PreviewGroup>
        <Carousel className={styles.imgCarousel} infinite={false}>
          <Link to="/product">
            <div className={styles.carouselItemCont}>
              <div className={styles.mask} />
              <Image
                preview={false}
                src="https://cdn.akamai.steamstatic.com/steam/apps/275850/capsule_616x353.jpg?t=1692895292"
                alt=""
                style={{ objectFit: 'cover' }}
                className={styles.carouselItemIMG}
              />
              <Card
                title="Card title"
                bordered={false}
                className={styles.carouselItemDesc}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Button type="primary" className={styles.btn}>
                ADD TO CART
              </Button>
            </div>
          </Link>
          <Link to="/product">
            <div className={styles.carouselItemCont}>
              <div className={styles.mask} />
              <Image
                preview={false}
                src="https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg?t=1692294127"
                alt=""
                style={{ objectFit: 'cover' }}
              />
              <Card
                title="Card title"
                bordered={false}
                className={styles.carouselItemDesc}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Button type="primary" className={styles.btn}>
                ADD TO CART
              </Button>
            </div>
          </Link>
          <Link to="/product">
            <div className={styles.carouselItemCont}>
              <div className={styles.mask} />
              <Image
                preview={false}
                src="https://cdn.akamai.steamstatic.com/steam/apps/2080690/capsule_616x353.jpg?t=1693348017"
                alt=""
                style={{ objectFit: 'cover' }}
              />
              <Card
                title="Card title"
                bordered={false}
                className={styles.carouselItemDesc}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Button type="primary" className={styles.btn}>
                ADD TO CART
              </Button>
            </div>
          </Link>
          <Link to="/product">
            <div className={styles.carouselItemCont}>
              <div className={styles.mask} />
              <Image
                preview={false}
                src="https://cdn.akamai.steamstatic.com/steam/apps/2080690/capsule_616x353.jpg?t=1693348017"
                alt=""
                style={{ objectFit: 'cover' }}
              />
              <Card
                title="Card title"
                bordered={false}
                className={styles.carouselItemDesc}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Button type="primary" className={styles.btn}>
                ADD TO CART
              </Button>
            </div>
          </Link>
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
}

export default BannerCarousel;
