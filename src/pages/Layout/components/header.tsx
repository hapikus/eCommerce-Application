import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Drawer, Menu, Avatar, Badge, Select } from 'antd';
import {
  MenuOutlined,
  MehOutlined,
  ShoppingCartOutlined,
  BulbOutlined,
  CloudOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import store, { RootState } from '../../../redux/store';

import { setTheme } from '../../../redux/slice/themeSlice';
import { logoutAsync } from '../../../redux/slice/authSlice';
import { getBasketItems, setBasketId } from '../../../redux/slice/basketSlice';

import styles from './header.module.css';

function MainMenu({
  isInLine = false,
  setOpenMenu,
}: {
  isInLine: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const userInfo = useSelector((state: RootState) => state.auth.user.email);
  const itemsBasket = useSelector(
    (state: RootState) => state.basket.itemsFromServer.items,
  );

  const basketIdState = useSelector(
    (state: RootState) => state.basket.basketId,
  );

  // const [currentPageState, setCurrentPageState] = useState('');
  const [selectedItem, setSelectedItem] = useState(['']);
  const themeState = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    setSelectedItem([location.pathname.replace('/', '')]);
  }, [location]);

  const onMenuClick = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (basketIdState) {
      store.dispatch(getBasketItems(basketIdState));
    }
  }, [basketIdState]);

  const logOut = async () => {
    await store.dispatch(logoutAsync());
    window.localStorage.removeItem('basketId');
    dispatch(setBasketId(''));
  };

  const renderLoginMenu = () => (
    <Menu
      className={isInLine ? styles.menu_items_line : styles.menu_items}
      onClick={onMenuClick}
      theme="light"
      forceSubMenuRender
      mode={isInLine ? 'inline' : 'horizontal'}
      selectedKeys={selectedItem}
    >
      <Menu.Item key="login">
        <NavLink
          to="login"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <span>LOG IN</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key="signup">
        <NavLink
          to="signup"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <span>SIGN UP</span>
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const renderAuthMenu = () => (
    <>
      <Button onClick={logOut}>Logout</Button>
      <Avatar
        style={{ backgroundColor: '#28784D' }}
        className={styles.avatarPointer}
        size="large"
      >
        <NavLink
          to="user"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {userInfo[0]}
        </NavLink>
      </Avatar>
    </>
  );

  return (
    <>
      <div className={styles.menu_main}>
        <Menu
          className={isInLine ? styles.menu_items_line : styles.menu_items}
          onClick={onMenuClick}
          theme="light"
          disabledOverflow
          mode={isInLine ? 'inline' : 'horizontal'}
          selectedKeys={selectedItem}
        >
          <Menu.Item key="">
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span>STORE</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="catalog">
            <NavLink
              to="catalog"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span>ALL GAMES</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="info">
            <NavLink
              to="info"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span>INFORMATION</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="support">
            <NavLink
              to="support"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <span>SUPPORT</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.leftMenuCont}>
        <Link to="/cart" className={styles.cartLink}>
          <Badge
            color={themeState === 'dark' ? '#faad14' : '#f5222d'}
            overflowCount={9}
            count={
              itemsBasket
                ? Object.values(itemsBasket).reduce(
                    (acc, count) => acc + count,
                    0,
                  )
                : null
            }
          >
            <Button
              type="primary"
              shape="circle"
              icon={<ShoppingCartOutlined />}
            />
          </Badge>
        </Link>
        <div className={styles.menu_reg}>
          {isAuthState ? renderAuthMenu() : renderLoginMenu()}
        </div>
      </div>
    </>
  );
}

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const themeState = useSelector((state: RootState) => state.theme.theme);
  const themesState = useSelector((state: RootState) => state.theme.themes);
  const dispatch = useDispatch();

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
      <Select
        className={styles.themeSwitcher}
        defaultValue={themeState}
        autoFocus={false}
        onChange={(value) => {
          dispatch(setTheme(value));
        }}
        options={Object.values(themesState).map((themeMap: string) => {
          let iconName = (<BulbOutlined />);
          if (themeMap === 'dark') {
            iconName = (<CloudOutlined />);
          }
          if (themeMap === 'barbie') {
            iconName = (<HeartOutlined />);
          }
          return {
            value: themeMap,
            label: ( <div>{ iconName }</div>),
          };
        })}
      />
    </>
  );
}

export default Header;
