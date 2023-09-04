import { useLayoutEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import styles from './main.module.css';

function SideBar() {
  const navigate = useNavigate();
  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  return (
    <div>
      <Menu
        className={styles.menu_items_line}
        onClick={onMenuClick}
        theme="light"
        mode="vertical"
        items={[
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
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage(''));
  }, [dispatch]);

  useLayoutEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  return (
    <div className={styles.container}>
      <SideBar />
    </div>
  );
}

export { SideBar };
export default MainPage;
