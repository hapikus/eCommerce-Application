import { useDispatch } from 'react-redux';
import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import { setSelectedTag } from '../../../redux/slice/productSlice';

import styles from './banner.module.css';

function CategoryCards(categorys: string[]) {
  const dispatch = useDispatch();

  // const [categoryLink, setcategoryLink] = useState();

  // const selectedTag = useSelector(
  //   (state: RootState) => state.product.selectedTag,
  // );

  return categorys.map((category: string) => (
    <Link to="/catalog" key={category}>
      <div className={styles.categoryCardContainer}>
        <Card
          hoverable
          key={category}
          className={styles.categoryCard}
          onClick={() => dispatch(setSelectedTag([category]))}
          cover={(
            <Image
              preview={false}
              src="https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          )}
        >
          <span className={styles.categoryTitle}>{category}</span>
          <div className={styles.gradient} />
        </Card>
      </div>
    </Link>
  ));
}

export default CategoryCards;
