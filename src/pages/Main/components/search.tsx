import { Input, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './banner.module.css';

const { Search } = Input;
function SearchMenu() {
  // const onSearch = (value: string) => console.log(value);
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  return (
    <div className={styles.searchMenu}>
      <Search
        placeholder="input search text"
        allowClear
        // onSearch={onSearch}
        style={{ width: 200 }}
      />
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
