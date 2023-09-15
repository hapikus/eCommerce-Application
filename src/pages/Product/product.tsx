import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductData,
  fetchRandProducts,
  setSelectedFilters,
} from '../../redux/slice/productSlice';
import store, { RootState } from '../../redux/store';

import SkeletonLoading from './components/skeletonLoading';
import ImgCarousel from './components/imgCarousel';
import HeaderRight from './components/headerRight';
import MainLeft from './components/mainLeft';
import MainRight from './components/mainRight';
import RandomCards from './components/randomCarts';

import IProduct from '../../types/IProduct';

import styles from './product.module.css';
import { IFilters } from '../../types/storeType';

const RANDOM_PRODUCT_REQUEST = 5;

const calculateNewRandomProductsNum = () => {
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

function Product() {
  const { productTitle } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleForRequest, setTitleForRequest] = useState('');
  const [randomProductsNum, setRandomProductsNum] = useState(
    calculateNewRandomProductsNum(),
  );

  useEffect(() => {
    const handleResize = () => {
      const newRandomProductsNum = calculateNewRandomProductsNum();
      if (newRandomProductsNum !== randomProductsNum) {
        setRandomProductsNum(newRandomProductsNum);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [randomProductsNum]);

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

  const createPath = (productDataStatePath: IProduct) => {
    const { gameTheme, gameGenre, gameTitle } = productDataStatePath;
    return (
      <div className={styles.pathCont}>
        <p className={styles.pathAllGames}>
          <Link
            className={styles.pathLink}
            to="/catalog"
            onClick={() => {
              dispatch(
                setSelectedFilters({
                  genres: [],
                  themes: [],
                  tags: [],
                  minPrice: 0,
                  maxPrice: 60,
                } as IFilters),
              );
            }}
          >
            All Games &gt;
          </Link>
        </p>
        <p className={styles.pathGenre}>
          <Link
            className={styles.pathLink}
            to="/catalog"
            onClick={() => {
              dispatch(
                setSelectedFilters({
                  genres: [gameGenre[0]],
                  themes: [],
                  tags: [],
                  minPrice: 0,
                  maxPrice: 60,
                } as IFilters),
              );
            }}
          >
            {`${gameGenre[0]} >`}
          </Link>
        </p>
        <p className={styles.pathTheme}>
          <Link
            className={styles.pathLink}
            to="/catalog"
            onClick={() => {
              dispatch(
                setSelectedFilters({
                  genres: [gameGenre[0]],
                  themes: [gameTheme[0]],
                  tags: [],
                  minPrice: 0,
                  maxPrice: 60,
                } as IFilters),
              );
            }}
          >
            {`${gameTheme[0]} >`}
          </Link>
        </p>
        <p className={styles.pathGameTitle}>{gameTitle}</p>
      </div>
    );
  };

  useEffect(() => {
    if (titleForRequest !== productTitle) {
      const fetchProduct = async () => {
        await store.dispatch(fetchProductData(productTitle || ''));
      };

      const fetchProducts = async () => {
        await store.dispatch(fetchRandProducts(RANDOM_PRODUCT_REQUEST));
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

  if (productLoading || productRandomLoading) {
    return <SkeletonLoading />;
  }

  return (
    <div className={styles.productCont}>
      <div className={styles.productTitleCont}>
        <div className={styles.productPath}>
          {productDataState.gameTitle &&
            productDataState.gameGenre &&
            productDataState.gameTheme &&
            createPath(productDataState)}
        </div>
        <h1 className={styles.productTitle}>{productDataState.gameTitle}</h1>
      </div>
      <div className={styles.headerBlockCont}>
        {productDataState.screenshotList && (
          <ImgCarousel productData={productDataState} />
        )}
        {productDataState.headerImg &&
          productDataState.descriptionShort &&
          productDataState.userReviewRows &&
          productDataState.releaseDate &&
          productDataState.devCompany && (
            <HeaderRight productData={productDataState} />
          )}
      </div>
      <div className={styles.mainCont}>
        {productDataState.price &&
          productDataState.descriptionLong &&
          (productDataState.sysRequirementsMinimum ||
            productDataState.sysRequirementsMinimumFill) && (
            <MainLeft productData={productDataState} />
          )}
        {productDataState.category &&
          productDataState.gameTitle &&
          productDataState.gameGenre &&
          productDataState.gameTheme &&
          productDataState.devCompany && (
            <MainRight productData={productDataState} />
          )}
      </div>
      <div className={styles.randProductsCont}>
        {productsRandomState?.length ? (
          <RandomCards
            products={productsRandomState}
            randomCards={randomProductsNum}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Product;
