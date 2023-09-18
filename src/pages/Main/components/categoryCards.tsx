import { useDispatch } from 'react-redux';
import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';

import { setSelectedFilters } from '../../../redux/slice/productSlice';

import styles from './banner.module.css';
import { IFilters } from '../../../types/storeType';

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

function CategoryCards(genres: string[]) {
  const dispatch = useDispatch();
  return genres.map((genre: string, index) => (
    <Link to="/catalog" key={genre}>
      <div className={styles.categoryCardContainer}>
        <Card
          hoverable
          key={genre}
          className={styles.categoryCard}
          onClick={() => {
            dispatch(
              setSelectedFilters({
                genres: [genre],
                themes: [],
                tags: [],
                minPrice: 0,
                maxPrice: 60,
              } as IFilters),
            );
          }}
          cover={
            <Image
              preview={false}
              src={topTagPic[index]}
              alt=""
              style={{ objectFit: 'cover' }}
            />
          }
        >
          <span className={styles.categoryTitle}>{genre}</span>
          <div className={styles.gradient} />
        </Card>
      </div>
    </Link>
  ));
}

export default CategoryCards;
