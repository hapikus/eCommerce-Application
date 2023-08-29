import { useEffect, useLayoutEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';
import {
  fetchProductData,
  fetchRandProducts,
} from '../../redux/slice/productSlice';
import store, { RootState } from '../../redux/store';

import ImgCarousel from './components/imgCarousel';
import HeaderRight from './components/headerRight';
import MainLeft from './components/mainLeft';
import MainRight from './components/mainRight';
import RandomCards from './components/randomCarts';

import styles from './product.module.css';

const RANDOM_PRODUCTS_NUM = 4;

function Product() {
  const { productTitle } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleForRequest, setTitleForRequest] = useState('');

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('product'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const productLoading = useSelector(
    (state: RootState) => state.product.isLoading,
  );
  const productRandomLoading = useSelector(
    (state: RootState) => state.product.isLoadingRandom,
  );

  const productDataState = useSelector(
    (state: RootState) => state.product.productData,
  );
  const productsRandomState = useSelector(
    (state: RootState) => state.product.randomProductsData,
  );

  const productErrorState = useSelector(
    (state: RootState) => state.product.errorProduct,
  );

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

  useLayoutEffect(() => {
    if (productErrorState) {
      message.error(productErrorState);
      navigate('/notFound');
    }
  }, [productErrorState, navigate]);

  return productLoading || productRandomLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className={styles.productCont}>
      <div>
        <h1 className={styles.productTitle}>{productDataState.gameTitle}</h1>
      </div>
      <div className={styles.headerBlockCont}>
        {productDataState.screenshotList && ImgCarousel(productDataState)}
        {productDataState.headerImg &&
          productDataState.descriptionShort &&
          productDataState.userReviewRows &&
          productDataState.releaseDate &&
          productDataState.devCompany &&
          HeaderRight(productDataState)}
      </div>
      <div className={styles.mainCont}>
        {productDataState.price &&
          productDataState.descriptionLong &&
          (productDataState.sysRequirementsMinimum ||
            productDataState.sysRequirementsMinimumFill) &&
          MainLeft(productDataState)}
        {productDataState.category && MainRight(productDataState)}
      </div>
      <div className={styles.randProductsCont}>
        {productsRandomState.length !== 0 && RandomCards(productsRandomState)}
      </div>
    </div>
  );
}

export default Product;
