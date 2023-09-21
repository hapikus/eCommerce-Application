import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import {
  fetchRandProducts,
  fetchAllCategory,
  fetchDiscountProducts,
} from '../../redux/slice/productSlice';

import store, { RootState } from '../../redux/store';

import styles from './main.module.css';
import SearchMenu from './components/search';
import CategoryCarousel from './components/categoryCarousel';
import DiscountCarousel from './components/discountCarousel';
import ProductService from '../../models/Product/ProductService';
import PromoBanner from './components/promo';
import SwiperMain from './components/swiperMain';
import GridCard from './components/gridCardTemp';
import BannerFirst from '../../assets/images/firstorder1.webp';
import BannerIndie from '../../assets/images/indie.webp';

const RANDOM_PRODUCT_REQUEST = 10;
const RANDOM_PRODUCT_DISCOUNT = 6;
const RANDOM_PRODUCT_SWIPER = 4;

const calculateCategoryNum = () => {
  const windowInnerWidth = window.innerWidth;
  let cardNumber = 1;
  if (windowInnerWidth > 912) {
    cardNumber = 4;
  } else if (windowInnerWidth > 692) {
    cardNumber = 3;
  } else if (windowInnerWidth > 472) {
    cardNumber = 2;
  }
  return cardNumber;
};

const calculateDiscNum = () => {
  const windowInnerWidth = window.innerWidth;
  let cardNumber = 1;
  if (windowInnerWidth > 912) {
    cardNumber = 3;
  } else if (windowInnerWidth > 692) {
    cardNumber = 2;
  } else if (windowInnerWidth > 472) {
    cardNumber = 1;
  }
  return cardNumber;
};

const calculateRandTempGridNum = () => {
  const windowInnerWidth = window.innerWidth;
  let cardNumber = 8;
  if (windowInnerWidth > 912) {
    cardNumber = 8;
  } else if (windowInnerWidth > 692) {
    cardNumber = 4;
  } else if (windowInnerWidth > 472) {
    cardNumber = 2;
  }
  return cardNumber;
};

const promoCode = 'SAVE10';
const promoFirst = 'FIRST ORDER';

const promoDescSave10 = 'Don’t miss out on your discount!';
const promoDescFirst =
  'Welcome bonus for new customers! Get a discount on your first order on our website.';

function SideBar() {
  const [categoryNum, setCategoryNum] = useState(calculateCategoryNum());
  const [discountNum, setDiscountNum] = useState(calculateDiscNum());
  const [gridNum, setGridNum] = useState(calculateRandTempGridNum());
  const [topGenres, setTopGenres] = useState([] as string[]);

  const productsRandom = useSelector(
    (state: RootState) => state.product.randomProductsData,
  );

  const loadingRand = useSelector(
    (state: RootState) => state.product.isLoadingRandom,
  );

  const loadingDisc = useSelector(
    (state: RootState) => state.product.isLoadingDiscRandom,
  );

  const categoryAll = useSelector(
    (state: RootState) => state.product.isAllCategoryData,
  );

  const discountRandom = useSelector(
    (state: RootState) => state.product.randDiscProductsData,
  );

  useEffect(() => {
    const fetchProducts = async () => {
      await store.dispatch(fetchRandProducts(RANDOM_PRODUCT_REQUEST));
    };
    const fetchCategory = async () => {
      await store.dispatch(fetchAllCategory());
    };
    const fetchTopGenres = async () => {
      const topGenresLoad = await ProductService.getTopGenres();
      setTopGenres(topGenresLoad.data);
    };
    fetchCategory();
    fetchTopGenres();
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newCategoryNum = calculateCategoryNum();
      if (newCategoryNum !== categoryNum) {
        setCategoryNum(newCategoryNum);
      }
      const newDiscountNum = calculateDiscNum();
      if (newDiscountNum !== discountNum) {
        setDiscountNum(newDiscountNum);
      }
      const newGridNum = calculateRandTempGridNum();
      if (newGridNum !== gridNum) {
        setGridNum(newGridNum);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [categoryNum, discountNum, gridNum]);

  useEffect(() => {
    const fetchDiscProducts = async () => {
      await store.dispatch(fetchDiscountProducts(RANDOM_PRODUCT_DISCOUNT));
    };
    fetchDiscProducts();
  }, [discountNum]);

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        <PromoBanner
          promo={promoFirst}
          promoDesc={promoDescFirst}
          banner={BannerFirst}
        />
      </div>
      <div className={styles.headerBlockCont}>
        {loadingRand ? (
          <Spin />
        ) : (
          <SwiperMain
            products={productsRandom}
            productsNum={RANDOM_PRODUCT_SWIPER}
          />
        )}
      </div>
      <div className={styles.headerBlockCont}>
        <PromoBanner
          promo={promoCode}
          promoDesc={promoDescSave10}
          banner={BannerIndie}
        />
      </div>
      <div className={styles.headerBlockCont}>
        {loadingDisc ? (
          <Spin />
        ) : (
          <DiscountCarousel
            products={discountRandom}
            productsNum={discountNum}
          />
        )}
      </div>
      <div className={styles.headerBlockCont}>
        {categoryAll?.length ? (
          <CategoryCarousel genres={topGenres} categoryShow={categoryNum} />
        ) : null}
      </div>
      <GridCard
        productsRandom={productsRandom}
        randomSwiper={RANDOM_PRODUCT_SWIPER}
        randomProductsNum={gridNum}
      />
    </div>
  );
}

function MainPage() {
  return (
    <div className={styles.container}>
      <SideBar />
    </div>
  );
}

export { SideBar };
export default MainPage;
