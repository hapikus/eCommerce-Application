import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Tag, Button, InputNumber, Spin } from 'antd';

import getDisccount from '../../../components/shared/getDiscount';

import SadRobot from '../../../assets/images/sadRobot.png';
import styles from './cartGameList.module.css';
import { RootState } from '../../../redux/store';

function CartGameList() {
  const fullBasketData = useSelector(
    (state: RootState) => state.basket.itemsFullFromServer,
  );

  const fullLoading = useSelector(
    (state: RootState) => state.basket.isGettingItemFull,
  )

  if (
    Object.values(fullBasketData) &&
    Object.values(fullBasketData).length === 0 &&
    !fullLoading
  ) {
    return (
      <div className={styles.emptyCont}>
        <div className={styles.emptyCartCont}>
          <Image
            preview={false}
            src={SadRobot}
            className={styles.emptyCartImg}
            style={{ objectFit: 'cover' }}
          />
          <h2>
            I have a million ideas. They all point to buy something &nbsp;
            <Link
             to="/catalog"
             style={{color: 'var(--color-accent)' }}
            >
            here.
            </Link>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <Spin spinning={fullLoading}>
    <div className={styles.container}>
      {Object.values(fullBasketData).map((prod) => {
        const { gameTitle, price, discountPrice, headerImg } = prod;
        return (
          <div className={styles.cartProdContainer}>
            <Link
              to={`/product/${gameTitle}`}
              key={gameTitle}
              className={styles.linkArea}
            >
              <div className={styles.cartProdImg}>
                <Image
                  preview={false}
                  src={headerImg}
                  className={styles.cartProdImg}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
            <div className={styles.cartProdTitle}>{gameTitle}</div>
            <div className={styles.cartProdQuant}>
              <InputNumber min={1} max={10} defaultValue={3} />
            </div>
            <div className={styles.cartProdPrice}>
              <Tag style={{ padding: '5px 15px', marginInlineEnd: '0px' }}>
                {getDisccount(price, discountPrice)}
              </Tag>
            </div>
            <div className={styles.cartProdControl}>
              <Button className={styles.catrPordDelBtn} type="text">
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
    </Spin>
  );
}

export default CartGameList;
