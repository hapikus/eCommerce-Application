import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Tag, Button, InputNumber, Spin, message } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import {
  getBasketFull,
  getBasketItems,
  removeItemFromBasket,
} from '../../../redux/slice/basketSlice';
import GetDescription from '../../../components/shared/getDiscount';
import store, { RootState } from '../../../redux/store';
import BasketService from '../../../models/Basket/BasketService';

import styles from './cartGameList.module.css';
import SadRobot from '../../../assets/images/sadRobot.png';

const EMPTY_CART_PHRASES = [
  "Empty cart? Don't talk to me about empty carts!",
  "Here I am, with a cart as empty as the vastness of space. Call that a satisfying shopping experience? 'Cause I don't.",
  "I've calculated your chances of finding something in this empty cart, but I don't think you'll like it.",
  'I have a million shopping ideas, and they all point to filling up this cart.',
  'I have a million ideas. They all point to buy something here.',
];

function CartGameList() {
  const [changeQuantFlag, setChangeQuantFlag] = useState(false);
  const [delBasketState, setDelBasketState] = useState(false);
  const basketIdState = useSelector(
    (state: RootState) => state.basket.basketId,
  );
  const fullBasketData = useSelector(
    (state: RootState) => state.basket.itemsFullFromServer,
  );
  const fullLoading = useSelector(
    (state: RootState) => state.basket.isGettingItemFull,
  );
  const itemLoading = useSelector(
    (state: RootState) => state.basket.isGettingItem,
  );
  const deleteGameLoading = useSelector(
    (state: RootState) => state.basket.isDeleting,
  );

  const deleteGameClick = async (gameTitleDel: string) => {
    store.dispatch(
      removeItemFromBasket({
        basketId: basketIdState,
        gameTitle: gameTitleDel,
      }),
    );
    message.success(`${gameTitleDel} was successfully deleted`);
  };

  const handleQuantityChange = async (
    gameTitleUpdate: string,
    basketQuantityUpdate: number,
    isIncrease: boolean,
  ) => {
    try {
      const newQuantity = isIncrease
        ? basketQuantityUpdate + 1
        : basketQuantityUpdate - 1;
      if (newQuantity >= 1 && newQuantity <= 15) {
        const itemUpdates = {
          [gameTitleUpdate]: newQuantity,
        };
        const changeQuantity = { itemUpdates };
        await BasketService.changeQuantity(basketIdState, changeQuantity);
        setChangeQuantFlag(true);
      }
    } catch (error) {
      message.error('Server error');
    }
  };

  const handleEnter = async (
    event: React.KeyboardEvent<HTMLInputElement>,
    gameTitleUpdate: string,
  ) => {
    const newValue = (event.target as HTMLInputElement).value;
    try {
      if (
        !Number.isNaN(newValue) &&
        Number(newValue) >= 1 &&
        Number(newValue) <= 15
      ) {
        const itemUpdates = {
          [gameTitleUpdate]: Number(newValue),
        };
        const changeQuantity = { itemUpdates };
        await BasketService.changeQuantity(basketIdState, changeQuantity);
        setChangeQuantFlag(true);
      }
    } catch (error) {
      message.error('Server error');
    }
  };

  const handleClearCartClick = async () => {
    setDelBasketState(true);
    try {
      await BasketService.deleteBasket(basketIdState);
      setChangeQuantFlag(true);
    } catch (error) {
      message.error('Server error');
    } finally {
      setDelBasketState(false);
    }
  };

  useEffect(() => {
    if (!deleteGameLoading && basketIdState !== '') {
      store.dispatch(getBasketItems(basketIdState));
      store.dispatch(getBasketFull(basketIdState));
    }
  }, [deleteGameLoading, basketIdState]);

  useEffect(() => {
    if (changeQuantFlag && basketIdState !== '') {
      store.dispatch(getBasketItems(basketIdState));
      store.dispatch(getBasketFull(basketIdState));
    }
    setChangeQuantFlag(false);
  }, [changeQuantFlag, basketIdState]);

  useEffect(() => {
    if (delBasketState && basketIdState !== '') {
      store.dispatch(getBasketItems(basketIdState));
      store.dispatch(getBasketFull(basketIdState));
    }
    setChangeQuantFlag(false);
  }, [delBasketState, basketIdState]);

  if (
    Object.values(fullBasketData) &&
    Object.values(fullBasketData).length === 0 &&
    !fullLoading
  ) {
    const randomIndex = Math.floor(Math.random() * EMPTY_CART_PHRASES.length);
    const randomPhrase = EMPTY_CART_PHRASES[randomIndex];
    return (
      <div className={styles.emptyCont}>
        <div className={styles.emptyCartCont}>
          <Image
            preview={false}
            src={SadRobot}
            className={styles.emptyCartImg}
            style={{ objectFit: 'cover' }}
          />
          <h2>{randomPhrase}</h2>
          <Button>
            <Link to="/catalog">Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Spin
      spinning={
        fullLoading || itemLoading || deleteGameLoading || delBasketState
      }
    >
      <div className={styles.mainCont}>
        <div className={styles.container}>
          {Object.values(fullBasketData).map((basketProduct) => {
            const {
              gameTitle,
              price,
              discountPrice,
              promoPrice,
              headerImg,
              basketQantity,
            } = basketProduct;
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
                <div className={styles.cartProdTitle}>
                  <p className={styles.cartTitle}>{gameTitle}</p>
                </div>
                <div className={styles.cartProdQuant}>
                  <div className={styles.cartProdQuantDecrease}>
                    <Button
                      className={styles.carProdQuanBut}
                      onClick={() =>
                        handleQuantityChange(gameTitle, basketQantity, false)
                      }
                      disabled={basketQantity === 1}
                    >
                      <MinusOutlined />
                    </Button>
                  </div>
                  <div className={styles.cartProdQuantInputCont}>
                    <InputNumber
                      className={styles.cartProdQuantInputElement}
                      controls={false}
                      min={1}
                      max={15}
                      value={basketQantity}
                      onPressEnter={(
                        event: React.KeyboardEvent<HTMLInputElement>,
                      ) => {
                        event.preventDefault();
                        handleEnter(event, gameTitle);
                      }}
                      disabled={changeQuantFlag}
                    />
                  </div>
                  <div className={styles.cartProdQuantIncrease}>
                    <Button
                      className={styles.carProdQuanBut}
                      onClick={() =>
                        handleQuantityChange(gameTitle, basketQantity, true)
                      }
                      disabled={basketQantity === 15}
                    >
                      <PlusOutlined />
                    </Button>
                  </div>
                </div>
                <div className={styles.cartProdPrice}>
                  <Tag style={{ padding: '5px 10px', marginInlineEnd: '0px' }}>
                    <GetDescription
                      priceDesc={price}
                      discountPriceDesc={discountPrice}
                      promoPrice={promoPrice}
                      quantity={basketQantity}
                    />
                  </Tag>
                </div>
                <div className={styles.cartProdControl}>
                  <Button
                    className={styles.catrPordDelBtn}
                    type="text"
                    onClick={() => deleteGameClick(gameTitle)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        {Object.values(fullBasketData).length !== 0 ? (
          <div className={styles.clearCartCont}>
            <Button
              className={styles.clearCartButton}
              onClick={handleClearCartClick}
            >
              Clear Cart
            </Button>
          </div>
        ) : null}
      </div>
    </Spin>
  );
}

export default CartGameList;
