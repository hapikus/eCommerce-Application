import { Button } from 'antd';
import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

function MainLeft(productDataState: IProduct) {
  const { gameTitle, price } = productDataState;
  return (
    <div className={styles.mainLeft}>
      <div className={styles.priceCont}>
        {`Buy ${gameTitle}`}
        <Button className={styles.priceButton}>
          {price}
        </Button>
      </div>
    </div>
  );
}

export default MainLeft;
