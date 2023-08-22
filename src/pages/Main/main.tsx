import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { message, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';

import styles from './main.module.css';

function SideBar() {
  const isAuthRef = useRef(false);
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);

  useEffect(() => {
    if (isAuthState && !isAuthRef.current) {
      isAuthRef.current = true;

      message.success('Login successful! Redirecting to the main page...');
      setTimeout(() => {
        navigate('/main');
      }, 1000);
    }
  }, [isAuthState, navigate]);

  return (
    <div>
      <Menu
        className={styles.menu_items_line}
        onClick={onMenuClick}
        theme="light"
        mode="vertical"
        items={[
          {
            label: 'Store',
            key: 'main',
          },
          {
            label: 'Information',
            key: 'info',
          },
          {
            label: 'Support',
            key: 'support',
          },
          {
            label: 'Sign up',
            key: 'signup',
          },
          {
            label: 'Sign in',
            key: 'login',
          },
        ]}
      />
    </div>
  );
}

function MainPage() {
  return (
    <>
      <div className={styles.container}>
        <SideBar
         />
      </div>
    </>
  );
}

export default MainPage;
