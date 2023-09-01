import { Carousel, Card, Image } from 'antd';

import styles from './banner.module.css';

function CategoryCarousel() {
  return (
    <div className={styles.categoryContainer}>
      <Carousel
        className={styles.containerCarousel}
        infinite={false}
        autoplay
        slidesToShow={2}
      >
        <div className={styles.categoryCardContainer}>
          <Card
            hoverable
            className={styles.categoryCard}
            cover={(
              <Image
                preview={false}
                src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.gradient} />
            <Card.Meta title="CATEGORY" className={styles.categoryTitle} />
          </Card>
        </div>
        <div className={styles.categoryCardContainer}>
          <Card
            hoverable
            className={styles.categoryCard}
            cover={(
              <Image
                preview={false}
                src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.gradient} />
            <Card.Meta title="CATEGORY" className={styles.categoryTitle} />
          </Card>
        </div>
        <div className={styles.categoryCardContainer}>
          <Card
            hoverable
            className={styles.categoryCard}
            cover={(
              <Image
                preview={false}
                src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.gradient} />
            <Card.Meta title="CATEGORY" className={styles.categoryTitle} />
          </Card>
        </div>
        <div className={styles.categoryCardContainer}>
          <Card
            hoverable
            className={styles.categoryCard}
            cover={(
              <Image
                preview={false}
                src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
                alt=""
                style={{ objectFit: 'cover' }}
              />
            )}
          >
            <div className={styles.gradient} />
            <Card.Meta title="CATEGORY" className={styles.categoryTitle} />
          </Card>
        </div>
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
