import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Divider, Input, InputRef, Spin, message } from 'antd';

import store, { RootState } from '../../../redux/store';
import {
  getBasketFull,
  getBasketItems,
} from '../../../redux/slice/basketSlice';

import BasketService from '../../../models/Basket/BasketService';

import styles from './cartSummary.module.css';

function CartSummary() {
  const [isEditing, setIsEditing] = useState(false);
  const [isPromoLoading, setIsPromoLoading] = useState(false);
  const inputRef = useRef<InputRef>(null);

  const basketIdState = useSelector(
    (state: RootState) => state.basket.basketId,
  );
  const fullBasketData = useSelector(
    (state: RootState) => state.basket.itemsFullFromServer,
  );

  const promoState = useSelector((state: RootState) => state.basket.promo);
  const [promoUseState, setPromoUseState] = useState(promoState);
  const isFullLoading = useSelector(
    (state: RootState) => state.basket.isGettingItemFull,
  );

  useEffect(() => {
    setPromoUseState(promoState);
  }, [promoState]);

  const priceObj = {
    price: 0,
    discountPrice: 0,
    promoPrice: 0,
  };

  const handleEditClick = () => {
    setIsEditing(true);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isEditing) {
      inputRef?.current?.focus();
    }
  }, [isEditing]);

  const handleSaveClick = async () => {
    setIsEditing(false);
    setIsPromoLoading(true);
    try {
      if (promoUseState && promoUseState !== promoState) {
        const promoAdd = await BasketService.addPromo(
          basketIdState,
          promoUseState,
        );
        store.dispatch(getBasketItems(basketIdState));
        store.dispatch(getBasketFull(basketIdState));
        if (promoAdd.data) {
          message.success(`${promoUseState} was successfully added`);
        }
      }
      if (promoUseState === '') {
        const promoDelete = await BasketService.deletePromo(basketIdState);
        store.dispatch(getBasketItems(basketIdState));
        store.dispatch(getBasketFull(basketIdState));
        if (promoDelete.data) {
          message.success(`Promo was successfully deleted`);
        }
        setPromoUseState('');
      }
    } catch (error) {
      setPromoUseState(promoState);
      message.error('Promo is incorrect');
    } finally {
      setIsPromoLoading(false);
    }
  };

  if (
    Object.values(fullBasketData) &&
    Object.values(fullBasketData).length > 0
  ) {
    Object.values(fullBasketData).forEach((gameBasketInfo) => {
      const { price, sortPrice, promoPrice, basketQantity } = gameBasketInfo;
      priceObj.price += price * basketQantity;
      priceObj.discountPrice += sortPrice * basketQantity;
      priceObj.promoPrice += promoPrice * basketQantity;
    });
  }

  if (!priceObj.price) {
    return null;
  }

  return (
    <div className={styles.sumMainCont}>
      <p className={styles.sumTitle}>Games Summary</p>
      {isFullLoading ? (
        <Spin className={styles.spinCont} size="large" />
      ) : (
        <div className={styles.spinInfoCont}>
          <div className={styles.sumTotalPriceCont}>
            <div className={styles.totalPrice}>
              <p className={styles.sumTotalPriceTitle}>Price</p>
              <p className={styles.sumTotalPriceValue}>
                {priceObj.price.toFixed(2)}
              </p>
            </div>
            {priceObj.discountPrice - priceObj.price ? (
              <div className={styles.discountPrice}>
                <p className={styles.sumDiscountPriceTitle}>Sales Discount</p>
                <p className={styles.sumDiscountPriceValue}>
                  {(priceObj.discountPrice - priceObj.price).toFixed(2)}
                </p>
              </div>
            ) : null}
            {priceObj.promoPrice - priceObj.discountPrice ? (
              <div className={styles.promoPrice}>
                <p className={styles.sumPromoPriceTitle}>Promo Discount</p>
                <p className={styles.sumPromoPriceValue}>
                  {(priceObj.promoPrice - priceObj.discountPrice).toFixed(2)}
                </p>
              </div>
            ) : null}
          </div>
          <Divider style={{ margin: '8px 0' }} />
          <div className={styles.orderPrice}>
            <p className={styles.sumOrderPriceTitle}>Subtotal</p>
            <p className={styles.sumOrderPriceValue}>
              {Math.min(
                priceObj.price,
                priceObj.discountPrice || Infinity,
                priceObj.promoPrice || Infinity,
              ).toFixed(2)}
            </p>
          </div>
        </div>
      )}
      <Button className={styles.checkOutButton} type="primary">
        CHECK OUT
      </Button>
      <div className={styles.promoContainer}>
        <div className={styles.promoButtonCont}>
          {isEditing ? (
            <Input
              ref={inputRef}
              className={styles.promoInput}
              value={promoUseState}
              onChange={(event) => setPromoUseState(event.target.value)}
              onBlur={handleSaveClick}
              onPressEnter={handleSaveClick}
              disabled={isPromoLoading}
            />
          ) : (
            <Button
              className={styles.promoButton}
              onClick={handleEditClick}
              disabled={isPromoLoading}
            >
              {promoState ? 'Change Promo Code' : 'Add Promo Code'}
            </Button>
          )}
        </div>
        {promoState === '' ? null : (
          <div className={styles.currentPromo}>
            <p className={styles.currentPromoTitle}>Current Promo:</p>
            <p className={styles.currentPromoText}>{promoState}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
