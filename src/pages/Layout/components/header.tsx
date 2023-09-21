import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Dropdown, Space, MenuProps } from 'antd';
import {
  MenuOutlined,
  MehOutlined,
  BulbOutlined,
  CloudOutlined,
  HeartOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { RootState } from '../../../redux/store';

import { setTheme } from '../../../redux/slice/themeSlice';

import styles from './header.module.css';
import MainMenu from './mainMenu';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const themeState = useSelector((state: RootState) => state.theme.theme);
  const themesState = useSelector((state: RootState) => state.theme.themes);
  const dispatch = useDispatch();

  const getIcon = (value: string) => {
    if (value === 'dark') {
      return <CloudOutlined />;
    }
    if (value === 'barbie') {
      return <HeartOutlined />;
    }
    return <BulbOutlined />;
  };

  const dropdownItems: MenuProps['items'] = Object.values(themesState).map(
    (themeMap: string) => ({
      value: themeMap,
      label: (
        <div className={styles.themeHolder}>
          {getIcon(themeMap)}
          {themeMap}
        </div>
      ),
      key: themeMap,
    }),
  );

  const handleThemeChange: MenuProps['onClick'] = ({ key }) => {
    const theme = key;
    if (theme !== undefined) {
      dispatch(setTheme(theme));
    }
  };

  return (
    <>
      <div className={styles.burgerMenu}>
        <MenuOutlined
          className={styles.burger_icon}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
        <Link to="/" className={styles.logotip}>
          <MehOutlined className={styles.logotip} />
        </Link>
      </div>
      <div className={styles.headerMenu}>
        <Link to="/" className={styles.logotip}>
          <MehOutlined className={styles.logotip} />
        </Link>
        <MainMenu setOpenMenu={setOpenMenu} isInLine={false} />
      </div>
      <Drawer
        placement="left"
        open={openMenu}
        closable={false}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <MainMenu setOpenMenu={setOpenMenu} isInLine />
      </Drawer>
      <div className={styles.themeComponent}>
        <Dropdown
          menu={{
            items: dropdownItems,
            onClick: handleThemeChange,
            selectable: true,
          }}
          trigger={['click']}
        >
          <Space>
            {getIcon(themeState)}
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </>
  );
}

export default Header;
