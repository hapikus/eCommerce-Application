import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { message } from 'antd';
import { useParams } from 'react-router-dom';
import { fetchRandProducts } from '../../redux/slice/productSlice';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import store, { RootState } from '../../redux/store';

import styles from './main.module.css';
import BannerCarousel from './components/bannerCarousel';
import SearchMenu from './components/search';
import CategoryCarousel from './components/categoryCarousel';

const RANDOM_PRODUCTS_NUM = 4;

function SideBar() {
  const { productTitle } = useParams();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [titleForRequest, setTitleForRequest] = useState('');

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('product'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const productsRandom = useSelector(
    (state: RootState) => state.product.randomProductsData,
  );
  useEffect(() => {
    if (titleForRequest !== productTitle) {
      const fetchProducts = async () => {
        await store.dispatch(fetchRandProducts(RANDOM_PRODUCTS_NUM));
      };
      fetchProducts();
      setTitleForRequest(productTitle || '');
    }
  }, [dispatch, productTitle, titleForRequest]);

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        {productsRandom.length !== 0 && BannerCarousel(productsRandom)}
      </div>
      <CategoryCarousel />
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
