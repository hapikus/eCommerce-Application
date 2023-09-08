import { useState } from 'react';
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
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [searchText, setSearchText] = useState('');

  const searchedProducts = useSelector(
    (state: RootState) => state.product.searchProducts,
  );

  const searchGame = async () => {
    await store.dispatch(fetchSearchProducts(searchText));
  };

  const focusHandler = () => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const blurHandler = () => {
    setTimeout(() => {
      searchGame();
      setIsFocus(false);
      setIsBlur(true);
    }, 250);
  };

  return (
    <div className={styles.searchMenu}>
      <div className={styles.searchController}>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={searchGame}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          style={{ width: 200 }}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        {isFocus && (
          <div className={styles.popoverContainer}>
            <PopoverCards products={searchedProducts} />
          </div>
        )}
        {isBlur && <div className={styles.popoverContainer} />}
        <Menu
          className={styles.searchNavMenu}
          onClick={onMenuClick}
          theme="light"
          mode="horizontal"
          items={[
            {
              label: 'STORE',
              key: '',
            },
            {
              label: 'ALL GAMES',
              key: 'catalog',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SearchMenu;
