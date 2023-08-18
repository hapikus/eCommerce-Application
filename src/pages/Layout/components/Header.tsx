import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Drawer, Menu, Avatar } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { RootState } from '../../../redux/store';

import styles from './header.module.css';

// eslint-disable-next-line react/prop-types
function MainMenu({ isInLine = false }) {
  const navigate = useNavigate();
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const userInfo = useSelector((state: RootState) => state.auth.user.email);
  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  const renderLoginMenu = () => (
    <Menu
      className={isInLine ? styles.menu_items_line : styles.menu_items}
      onClick={onMenuClick}
      theme="light"
      mode={isInLine ? 'inline' : 'horizontal'}
      items={[
        {
          label: 'Login',
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
      <Avatar size="large">
        {userInfo}
      </Avatar>
      <Button>Logout</Button>
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
        <div className={styles.logotip} />
      </div>
      <div className={styles.headerMenu}>
        <div className={styles.logotip} />
        <MainMenu />
      </div>
      <Drawer
        placement="left"
        open={openMenu}
        closable={false}
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <MainMenu isInLine />
      </Drawer>
    </>
  );
}
export default Header;
