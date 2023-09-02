import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { message } from 'antd';
import {
  fetchRandProducts,
  fetchAllCategory,
} from '../../redux/slice/productSlice';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import store, { RootState } from '../../redux/store';

import styles from './main.module.css';
import BannerCarousel from './components/bannerCarousel';
import SearchMenu from './components/search';
import CategoryCarousel from './components/categoryCarousel';

const RANDOM_PRODUCTS_NUM = 4;

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

function SideBar() {
  const dispatch = useDispatch();

  const [categoryNum, setCategoryNum] = useState(
    calculateCategoryNum(),
  );

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('product'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const productsRandom = useSelector(
    (state: RootState) => state.product.randomProductsData,
  );

  const categoryAll = useSelector(
    (state: RootState) => state.product.isAllCategoryData,
  );

  useEffect(() => {
    const fetchProducts = async () => {
      await store.dispatch(fetchRandProducts(RANDOM_PRODUCTS_NUM));
    };
    const fetchCategory = async () => {
      await store.dispatch(fetchAllCategory());
    };
    fetchCategory();
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newCategoryNum = calculateCategoryNum();
      if (newCategoryNum !== categoryNum) {
        setCategoryNum(newCategoryNum);
      }
    };
    window.addEventListener('resize', handleResize);
    console.log(categoryNum);
  }, [categoryNum]);

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        {productsRandom.length !== 0 && BannerCarousel(productsRandom)}
      </div>
      <div className={styles.headerBlockCont}>
        {categoryAll?.length ? (
          <CategoryCarousel
            categorys={categoryAll}
            categoryShow={categoryNum}
          />
        ) : null}
      </div>
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
