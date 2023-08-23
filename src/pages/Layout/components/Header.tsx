import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Drawer, Menu, Avatar } from 'antd';
import { MenuOutlined, MehOutlined } from '@ant-design/icons';
import store, { RootState } from '../../../redux/store';

import { SideBar } from '../../Main/main';

import styles from './header.module.css';
import { logoutAsync } from '../../../redux/slice/authSlice';

function MainMenu({
  isInLine = false,
  setOpenMenu,
}: {
  isInLine: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const userInfo = useSelector((state: RootState) => state.auth.user.email);
  const onMenuClick = (item: { key: string }) => {
    setOpenMenu(false);
    return navigate(`/${item.key}`);
  };

  const logOut = async () => {
    await store.dispatch(logoutAsync());
  };

  const renderLoginMenu = () => (
    <Menu
      className={isInLine ? styles.menu_items_line : styles.menu_items}
      onClick={onMenuClick}
      theme="light"
      mode={isInLine ? 'inline' : 'horizontal'}
      items={[
        {
          label: 'Sign in',
          key: 'login',
        },
        {
          label: 'Sign up',
          key: 'signup',
        },
      ]}
    />
  );

  const renderAuthMenu = () => (
    <>
      <Button onClick={logOut}>Logout</Button>
      <Avatar size="large">{userInfo[0]}</Avatar>
    </>
  );

  return (
    <>
      <div className={styles.menu_main}>
        <Menu
          className={isInLine ? styles.menu_items_line : styles.menu_items}
          onClick={onMenuClick}
          theme="light"
          mode={isInLine ? 'inline' : 'horizontal'}
          items={[
            {
              label: 'Store',
              key: '',
            },
            {
              label: 'Information',
              key: 'info',
            },
            {
              label: 'Support',
              key: 'support',
            },
          ]}
        />
      </div>
      <div className={styles.menu_reg}>
        {isAuthState ? renderAuthMenu() : renderLoginMenu()}
      </div>
    </>
  );
}

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <SideBar />
      </Drawer>
    </>
  );
}
export default Header;
