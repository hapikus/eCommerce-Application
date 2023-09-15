import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import store, { RootState } from '../../redux/store';
import { getBasketFull } from '../../redux/slice/basketSlice';

import CartSummary from './components/cartSummary';
import CartGameList from './components/cartGameList';

import styles from './cart.module.css';

function CartPage() {
  const basketIdState = useSelector((state: RootState) => state.basket.basketId);

  useLayoutEffect(() => {
    if (basketIdState !== '') {
      store.dispatch(getBasketFull(basketIdState));
    }
  }, [basketIdState])

  return (
    <div className={styles.baskContMain}>
      <div className={styles.baskTitleCont}>
        <h1 className={styles.baskTitle}>MY CART</h1>
      </div>
      <div className={styles.mainInfoCont}>
        <div className={styles.mainLeftCont}>
          <CartGameList />
        </div>
        <div className={styles.mainRightCont}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
