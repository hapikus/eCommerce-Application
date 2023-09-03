import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import styles from './banner.module.css';

function CategoryCards(categorys: string[]) {
  // const { categorys } = props;
  return categorys.map((category: string) => (
    <Link to={`/product/${category}`} key={category}>
      <div className={styles.categoryCardContainer}>
        <Card
          hoverable
          key={category}
          className={styles.categoryCard}
          cover={
            <Image
              preview={false}
              src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          }
        >
          <span className={styles.categoryTitle}>{category}</span>
          <div className={styles.gradient} />
        </Card>
      </div>
    </Link>
  ));
}

export default CategoryCards;
