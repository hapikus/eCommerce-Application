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
import SwiperMain from './components/swiper';
import GridCard from './components/gridCard';

const RANDOM_PRODUCT_REQUEST = 4;

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

function SideBar() {
  const [categoryNum, setCategoryNum] = useState(calculateCategoryNum());
  const [discountNum, setDiscountNum] = useState(calculateDiscNum());
  const [topGenres, setTopGenres] = useState([] as string[]);

  const productsRandom = useSelector(
    (state: RootState) => state.product.randomProductsData,
  );

  const loadingRabd = useSelector(
    (state: RootState) => state.product.isLoadingRandom,
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
      const todGenres = await ProductService.getTopGenres();
      setTopGenres(todGenres.data);
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
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [categoryNum, discountNum]);

  useEffect(() => {
    const fetchDiscProducts = async () => {
      await store.dispatch(fetchDiscountProducts(RANDOM_PRODUCT_REQUEST));
    };
    fetchDiscProducts();
  }, [discountNum]);

  // dispatch(
  //   setSelectedFilters({
  //     genres: [gameGenre[0]],
  //     themes: [],
  //     tags: [],
  //     minPrice: 0,
  //     maxPrice: 60,
  //   } as IFilters),

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        {loadingRabd ? <Spin /> : <SwiperMain products={productsRandom} />}
      </div>
      <div className={styles.headerBlockCont}>
        <PromoBanner />
      </div>
      <div className={styles.headerBlockCont}>
        {discountRandom?.length ? (
          <DiscountCarousel
            products={discountRandom}
            productsNum={discountNum}
          />
        ) : null}
      </div>
      <div className={styles.headerBlockCont}>
        {categoryAll?.length ? (
          <CategoryCarousel genres={topGenres} categoryShow={categoryNum} />
        ) : null}
      </div>
      <GridCard />
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
