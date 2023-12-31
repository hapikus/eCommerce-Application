import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Avatar, Badge, Button, Menu } from 'antd';

import { ShoppingCartOutlined } from '@ant-design/icons';
import store, { RootState } from '../../../redux/store';
import { getBasketItems, setBasketId } from '../../../redux/slice/basketSlice';
import { logoutAsync } from '../../../redux/slice/authSlice';

import styles from './mainMenu.module.css';

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
      className={isInLine ? styles.menuItemsLine : styles.menuItems}
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
      <div className={styles.menuMain}>
        <Menu
          className={isInLine ? styles.menuItemsLine : styles.menuItems}
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
        <div className={styles.menuReg}>
          {isAuthState ? renderAuthMenu() : renderLoginMenu()}
        </div>
      </div>
    </>
  );
}

export default MainMenu;
