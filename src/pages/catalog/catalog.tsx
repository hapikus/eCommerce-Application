import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Slider, Pagination } from 'antd';
import type { PaginationProps } from 'antd';

import CatalogCards from './components/catalogCard';
import { fetchCatalogProducts } from '../../redux/slice/productSlice';

import store, { RootState } from '../../redux/store';

import CheckBoxCategory from './components/checkboxCategory';

import styles from './catalog.module.css';

const MIN_PRICE = 0;
const MAX_PRICE = 60;

const calculateCardsNum = () => {
  const windowInnerWidth = window.innerWidth;
  let cardNumber = 1;
  if (windowInnerWidth > 912) {
    cardNumber = 12;
  } else if (windowInnerWidth > 692) {
    cardNumber = 8;
  } else if (windowInnerWidth > 472) {
    cardNumber = 6;
  }
  return cardNumber;
};

function CatalogPage() {
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [catalogCurrPage, setCatalogCurrPage] = useState(1);
  const [cardsNum, setCardsNum] = useState(calculateCardsNum());

  const catalogProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.products,
  );

  const selectedTag = useSelector(
    (state: RootState) => state.product.selectedTag,
  );

  const catalogTotalProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.totalProducts,
  );

  // const errorCatalogProducts = useSelector(
  //   (state: RootState) => state.product.errorCatalogProducts,
  // );

  const loadingCatalogProducts = useSelector(
    (state: RootState) => state.product.isLoadingCatalogProducts,
  );

  useEffect(() => {
    const handleResize = () => {
      const newCardsNum = calculateCardsNum();
      if (newCardsNum !== cardsNum) {
        setCardsNum(newCardsNum);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [cardsNum]);

  useEffect(() => {
    const fetchCatalog = async () => {
      await store.dispatch(
        fetchCatalogProducts({
          pageNumber: catalogCurrPage,
          pageLimit: cardsNum,
          sortColumn: 'gameTitle',
          sortDirection: 'up',
          tags: selectedTag,
          minPrice,
          maxPrice,
        }),
      );
    };
    fetchCatalog();
  }, [minPrice, maxPrice, selectedTag, cardsNum, catalogCurrPage]);

  const setPrice = (value: [number, number]) => {
    const [minPriceSlider, maxPriceSlider] = value;
    if (minPriceSlider !== minPrice) {
      setMinPrice(minPriceSlider);
    }
    if (maxPriceSlider !== maxPrice) {
      setMaxPrice(maxPriceSlider);
    }
  };

  const paginationOnChange: PaginationProps['onChange'] = (page: number) => {
    setCatalogCurrPage(page);
  };

  if (loadingCatalogProducts) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogMainContainer}>
        {catalogProducts?.length ? (
          <CatalogCards products={catalogProducts} />
        ) : null}
        <Pagination
          total={catalogTotalProducts}
          pageSize={cardsNum}
          onChange={paginationOnChange}
          current={catalogCurrPage}
        />
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          range
          step={1}
          defaultValue={[minPrice, maxPrice]}
          min={MIN_PRICE}
          max={MAX_PRICE}
          onAfterChange={setPrice}
        />
        <CheckBoxCategory />
      </div>
    </div>
  );
}

export default CatalogPage;
