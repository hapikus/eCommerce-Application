import styles from './gridCard.module.css';

import IProduct from '../../../types/IProduct';
import GridCard from './gridCard';

function GridCardTemp(props: {
  productsRandom: IProduct[];
  randomSwiper: number;
  randomProductsNum: number;
}) {
  const { productsRandom, randomSwiper, randomProductsNum } = props;
  return (
    <div className={styles.gridWrapper}>
      <h2>POPULAR GAMES</h2>
      <div className={styles.gridContainer}>
        <GridCard
          products={productsRandom}
          ramdomSwiperNum={randomSwiper}
          randomCards={randomProductsNum}
        />
      </div>
    </div>
  );
}

export default GridCardTemp;
