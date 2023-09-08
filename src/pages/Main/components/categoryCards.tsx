import { useDispatch } from 'react-redux';
import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import { setSelectedTag } from '../../../redux/slice/productSlice';

import styles from './banner.module.css';

const topTagPic = [
  'https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/puzzle_matching/?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/science_fiction?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/visual_novel?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=russian',
  'https://store.steampowered.com/categories/homepageimage/category/story_rich?cc=us&l=russian',
];

function CategoryCards(categorys: string[]) {
  const dispatch = useDispatch();
  return categorys.map((category: string, index) => (
    <Link to="/catalog" key={category}>
      <div className={styles.categoryCardContainer}>
        <Card
          hoverable
          key={category}
          className={styles.categoryCard}
          onClick={() => dispatch(setSelectedTag([category]))}
          cover={
            <Image
              preview={false}
              src={topTagPic[index]}
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
