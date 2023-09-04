import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Menu } from 'antd';

import { fetchSearchProducts } from '../../../redux/slice/productSlice';

import store, { RootState } from '../../../redux/store';

import styles from './banner.module.css';
import PopoverCards from '../../catalog/components/popoverCard';

const { Search } = Input;
function SearchMenu() {
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);
  const [searchProd, setSearchProd] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const searchedProducts = useSelector(
    (state: RootState) => state.product.searchProducts,
  );

  const onSearch = (value: string) => {
    setSearchProd(value);
  };

  useEffect(() => {
    if (searchProd.length !== 0) {
      const fetchSearch = async () => {
        await store.dispatch(fetchSearchProducts(searchProd));
      };
      fetchSearch();
    }
  }, [searchProd]);

  const focusHandler = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const blurHandler = () => {
    setIsFocus(false);
    setIsBlur(true);
  };

  return (
    <div className={styles.searchMenu}>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      {isFocus && (
        <div className={styles.popoverContainer}>
          <PopoverCards products={searchedProducts} />
        </div>
      )}
      {isBlur && (
        <div className={styles.popoverContainer} />
      )}
      <Menu
        className={styles.menu_search}
        onClick={onMenuClick}
        theme="light"
        mode="horizontal"
        items={[
          {
            label: 'Main',
            key: 'main',
          },
          {
            label: 'Catalog',
            key: 'catalog',
          },
        ]}
      />
    </div>
  );
}

export default SearchMenu;
