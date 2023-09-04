import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Slider,
  Pagination,
  PaginationProps,
  Dropdown,
  Button,
  Space,
  Switch,
} from 'antd';
import {
  DownOutlined,
  EuroOutlined,
  MehOutlined,
  UpSquareOutlined,
  DownSquareOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import CatalogCards from './components/catalogCard';
import { fetchCatalogProducts } from '../../redux/slice/productSlice';

import store, { RootState } from '../../redux/store';

import CheckBoxCategory from './components/checkboxCategory';

import styles from './catalog.module.css';
import SearchMenu from '../Main/components/search';

const MIN_PRICE = 0;
const MAX_PRICE = 60;
const SORT_DEFAULT = 'gameTitle';
const SORT_DIR_DEFAUL = 'up';

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
  const [sortValue, setSortValue] = useState(SORT_DEFAULT);
  const [sortDir, setSortDir] = useState(SORT_DIR_DEFAUL);

  const catalogProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.products,
  );

  const selectedTag = useSelector(
    (state: RootState) => state.product.selectedTag,
  );

  const catalogTotalProducts = useSelector(
    (state: RootState) => state.product.catalogProducts.totalProducts,
  );

  // const sortedCat = useSelector(
  //   (state: RootState) => state.product.catalogProducts.
  // )

  // const errorCatalogProducts = useSelector(
  //   (state: RootState) => state.product.errorCatalogProducts,
  // );

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
          sortColumn: sortValue,
          sortDirection: sortDir,
          tags: selectedTag,
          minPrice,
          maxPrice,
        }),
      );
    };
    fetchCatalog();
  }, [
    minPrice,
    maxPrice,
    selectedTag,
    cardsNum,
    catalogCurrPage,
    sortValue,
    sortDir,
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

  const items: MenuProps['items'] = [
    {
      label: 'Game title',
      key: 'gameTitle',
      icon: <MehOutlined />,
    },
    {
      label: 'Price',
      key: 'price',
      icon: <EuroOutlined />,
    },
  ];

  const onClickMenu: MenuProps['onClick'] = ({ key }) => {
    setSortValue(key);
  };

  const menuProps = {
    items,
    onClick: onClickMenu,
  };

  const sortDirection = (checked: boolean) => {
    setSortDir(checked ? 'up' : 'down');
  };

  return (
    <div className={styles.pageContainer}>
      <SearchMenu />
      <h1>Catalog</h1>
      <div className={styles.catalog}>
        <div className={styles.catalogMainContainer}>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                {`Sort by ${sortValue === 'gameTitle' ? 'Game Title' : 'Price'}`}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Switch
            checkedChildren={<UpSquareOutlined />}
            unCheckedChildren={<DownSquareOutlined />}
            onChange={sortDirection}
          />
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
