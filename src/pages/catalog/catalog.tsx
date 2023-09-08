import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Slider,
  Pagination,
  PaginationProps,
  Dropdown,
  Space,
} from 'antd';
import {
  DownOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import CatalogCards from './components/catalogCard';
import { fetchCatalogProducts } from '../../redux/slice/productSlice';

import store, { RootState } from '../../redux/store';

import CheckBoxCategory from './components/checkboxCategory';

import styles from './catalog.module.css';
import SearchMenu from '../Main/components/search';

type Filter = {
  label: string;
  direction: string;
  type: string;
};

const FILTERS: Filter[] = [
  {
    label: 'Alphabetical',
    direction: 'up',
    type: 'gameTitle',
  },
  {
    label: 'Alphabetical reverse',
    direction: 'down',
    type: 'gameTitle',
  },
  {
    label: 'Low to high',
    direction: 'up',
    type: 'price',
  },
  {
    label: 'High to low',
    direction: 'down',
    type: 'price',
  },
];

const MIN_PRICE = 0;
const MAX_PRICE = 60;

const calculateCardsNum = () => {
  const windowInnerWidth = window.innerWidth;
  let cardNumber = 4;
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
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  const catalogProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.products,
  );

  const selectedFilters = useSelector(
    (state: RootState) => state.product.selectedFilters,
  );

  const catalogTotalProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.totalProducts,
  );

  useEffect(() => {
    const handleResize = () => {
      const newCardsNum = calculateCardsNum();
      if (newCardsNum !== cardsNum) {
        setCardsNum(newCardsNum);
        setCatalogCurrPage(1);
      }
    };
    window.addEventListener('resize', handleResize);
  }, [cardsNum, catalogCurrPage]);

  useEffect(() => {
    const fetchCatalog = async () => {
      await store.dispatch(
        fetchCatalogProducts({
          pageNumber: catalogCurrPage,
          pageLimit: cardsNum,
          sortColumn: activeFilter.type,
          sortDirection: activeFilter.direction,
          tags: selectedFilters.tags,
          themes: selectedFilters.themes,
          genres: selectedFilters.genres,
          minPrice,
          maxPrice,
        }),
      );
    };
    fetchCatalog();
  }, [
    minPrice,
    maxPrice,
    selectedFilters.tags,
    selectedFilters.themes,
    selectedFilters.genres,
    cardsNum,
    catalogCurrPage,
    activeFilter.type,
    activeFilter.direction,
  ]);

  const setPrice = (value: [number, number]) => {
    const [minPriceSlider, maxPriceSlider] = value;
    if (minPriceSlider !== minPrice) {
      setMinPrice(minPriceSlider);
    }
    if (maxPriceSlider !== maxPrice) {
      setMaxPrice(maxPriceSlider);
    }
    setCatalogCurrPage(1);
  };

  const paginationOnChange: PaginationProps['onChange'] = (page: number) => {
    setCatalogCurrPage(page);
  };

  const handleFilterChange: MenuProps['onClick'] = ({ key }) => {
    const [direction, type] = key.split('_');
    const filter: Filter | undefined = FILTERS.find(
      (sort) => sort.type === type && sort.direction === direction,
    );
    if (filter !== undefined) {
      setActiveFilter(filter);
    }
  };

  const dropdownMenuitems = FILTERS.map((filter) => ({
    label: filter.label,
    key: `${filter.direction}_${filter.type}`,
  }));

  const selectedItemKey = `${activeFilter.direction}_${activeFilter.type}`;

  return (
    <div className={styles.pageContainer}>
      <SearchMenu />
      <h1 className={styles.catalogTitle}>ALL GAMES</h1>
      <div className={styles.catalog}>
        <div className={styles.catalogMainContainer}>
          <div className={styles.filterComponent}>
            <Dropdown
              menu={{
                items: dropdownMenuitems,
                defaultSelectedKeys: ['1'],
                onClick: handleFilterChange,
                selectable: true,
                selectedKeys: [selectedItemKey],
              }}
              trigger={['click']}
            >
              <Space>
                Sort by:
                {activeFilter.label}
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
          <CatalogCards products={catalogProducts} />
          <Pagination
            total={catalogTotalProducts}
            pageSize={cardsNum}
            onChange={paginationOnChange}
            current={catalogCurrPage}
          />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.catalogMenuSlider}>
            <h3 className={styles.menuCompTitle}>Narrow by price</h3>
            <Slider
              range
              step={1}
              defaultValue={[minPrice, maxPrice]}
              min={MIN_PRICE}
              max={MAX_PRICE}
              onAfterChange={setPrice}
              tooltip={{ open: true, placement: 'bottom' }}
            />
          </div>
          <div className={styles.catalogMenuCheckBox}>
            <h3 className={styles.menuCompTitle}>Narrow by tag</h3>
            <CheckBoxCategory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
