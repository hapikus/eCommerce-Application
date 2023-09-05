import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRandProducts,
  fetchAllCategory,
  fetchDiscountProducts,
} from '../../redux/slice/productSlice';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import store, { RootState } from '../../redux/store';

import styles from './main.module.css';
import BannerCarousel from './components/bannerCarousel';
import SearchMenu from './components/search';
import CategoryCarousel from './components/categoryCarousel';
import DiscountCarousel from './components/discountCarousel';
import ProductService from '../../models/Product/ProductService';

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
  const dispatch = useDispatch();

  const [categoryNum, setCategoryNum] = useState(calculateCategoryNum());
  const [discountNum, setDiscountNum] = useState(calculateDiscNum());
  const [topCategory, setTopCategory] = useState([] as string[]);

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
    const fetchTopCategory = async () => {
      const topCatData = await ProductService.getTopCategories();
      setTopCategory(topCatData.data);
    };
    fetchCategory();
    fetchTopCategory();
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
  }, [categoryNum]);

  useEffect(() => {
    const handleResize = () => {
      const newDiscountNum = calculateDiscNum();
      if (newDiscountNum !== discountNum) {
        setDiscountNum(newDiscountNum);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [discountNum]);

  useEffect(() => {
    const handleResize = () => {
      const newDiscountNum = calculateDiscNum();
      if (newDiscountNum !== discountNum) {
        setDiscountNum(newDiscountNum);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [discountNum]);

  useEffect(() => {
    const fetchDiscProducts = async () => {
      await store.dispatch(fetchDiscountProducts(RANDOM_PRODUCT_REQUEST));
    };

    fetchDiscProducts();
  }, [discountNum]);

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        {productsRandom.length !== 0 && BannerCarousel(productsRandom)}
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
          <CategoryCarousel
            categorys={topCategory}
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
