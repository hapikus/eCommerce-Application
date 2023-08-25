import { useEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';
import { fetchProductData } from '../../redux/slice/productSlice';
import store, { RootState } from '../../redux/store';

import ImgCarousel from './components/imgCarousel';
import HeaderRight from './components/headerRight';
import MainLeft from './components/mainLeft';

import styles from './product.module.css';

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

  const productDataState = useSelector(
    (state: RootState) => state.product.productData,
  );

  const productErrorState = useSelector(
    (state: RootState) => state.product.errorProduct,
  );

  useEffect(() => {
    if (titleForRequest !== productTitle) {
      const fetchProduct = async () => {
        await store.dispatch(fetchProductData(productTitle || ''));
      };
      fetchProduct();
      setTitleForRequest(productTitle || '');
    }
  }, [dispatch, productTitle, titleForRequest]);

  useEffect(() => {
    if (productErrorState) {
      message.error(productErrorState);
      setTimeout(() => {
        navigate('/notFound');
      }, 1500);
    }
  }, [productErrorState, navigate]);

  return productLoading ? (
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
        {productDataState.price && MainLeft(productDataState)}
        <div className={styles.mainRight}>{productDataState.price}</div>
      </div>
    </div>
  );
}

export default Product;
