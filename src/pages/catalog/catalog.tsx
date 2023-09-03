import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Slider } from 'antd';

import DiscountCards from '../Main/components/discountCards';
import { fetchCatalogProducts } from '../../redux/slice/productSlice';

import store, { RootState } from '../../redux/store';

import CheckBoxCategory from './components/checkboxCategory';

import styles from './catalog.module.css';

const MIN_PRICE = 0;
const MAX_PRICE = 171.69;

function CatalogPage() {
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const catalogProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.products,
  );

  const selectedTag = useSelector(
    (state: RootState) => state.product.selectedTag,
  );

  // const catalogTotalProducts = useSelector(
  //   (state: RootState) => state.product.catalogProducts.totalProducts,
  // );

  // const errorCatalogProducts = useSelector(
  //   (state: RootState) => state.product.errorCatalogProducts,
  // );

  const loadingCatalogProducts = useSelector(
    (state: RootState) => state.product.isLoadingCatalogProducts,
  );

  useEffect(() => {
    const fetchCatalog = async () => {
      await store.dispatch(
        fetchCatalogProducts({
          pageNumber: 1,
          pageLimit: 12,
          sortColumn: 'gameTitle',
          sortDirection: 'up',
          tags: selectedTag,
          minPrice,
          maxPrice,
        }),
      );
    };
    fetchCatalog();
  }, [minPrice, maxPrice, selectedTag]);

  const setPrice = (value: [number, number]) => {
    const [minPriceSlider, maxPriceSlider] = value;
    if (minPriceSlider !== minPrice) {
      setMinPrice(minPriceSlider);
    }
    if (maxPriceSlider !== maxPrice) {
      setMaxPrice(maxPriceSlider);
    }
  };

  if (loadingCatalogProducts) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogMainContainer}>
        {catalogProducts?.length ? DiscountCards(catalogProducts) : null}
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
