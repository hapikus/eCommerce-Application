import { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentPage } from '../../redux/slice/themeSlice';
import store from '../../redux/store';

import {
  fetchProductData,
  fetchRandProducts,
} from '../../redux/slice/productSlice';

import styles from './main.module.css';
import BannerCarousel from './components/bannerCarousel';
import SearchMenu from './components/search';
import CategoryCarousel from './components/categoryCarousel';

const RANDOM_PRODUCTS_NUM = 4;

function SideBar() {
  // const navigate = useNavigate();
  // const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  return (
    <div className={styles.mainCont}>
      <SearchMenu />
      <div className={styles.headerBlockCont}>
        {/* <Menu
          className={styles.menu_items_line}
          onClick={onMenuClick}
          theme="light"
          mode="vertical"
          items={[
            {
              label: 'Information',
              key: 'info',
            },
            {
              label: 'Support',
              key: 'support',
            },
            {
              label: 'Sign up',
              key: 'signup',
            },
            {
              label: 'Sign in',
              key: 'login',
            },
          ]}
        /> */}
        {BannerCarousel()}
      </div>
      <CategoryCarousel />
    </div>
  );
}

function MainPage() {
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage(''));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const { productTitle } = useParams();
  // const navigate = useNavigate();

  const [titleForRequest, setTitleForRequest] = useState('');

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  // const productErrorState = useSelector(
  //   (state: RootState) => state.product.errorProduct,
  // );

  useEffect(() => {
    if (titleForRequest !== productTitle) {
      const fetchProduct = async () => {
        await store.dispatch(fetchProductData(productTitle || ''));
      };

      const fetchProducts = async () => {
        await store.dispatch(fetchRandProducts(RANDOM_PRODUCTS_NUM));
      };

      fetchProduct();
      fetchProducts();
      setTitleForRequest(productTitle || '');
    }
  }, [dispatch, productTitle, titleForRequest]);

  // useLayoutEffect(() => {
  //   if (productErrorState) {
  //     message.error(productErrorState);
  //     navigate('/notFound');
  //   }
  // }, [productErrorState, navigate]);

  return (
    <div className={styles.container}>
      <SideBar />
    </div>
  );
}

export { SideBar };
export default MainPage;
