import { useNavigate, Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './header.module.css';

function HeaderUi() {
  const navigate = useNavigate();

  const onMenuClick = (item: { key: string }) => navigate(`/${item.key}`);

  return (
    <>
      <div className={styles.logotip} />
      <Menu
        className={styles.header}
        onClick={onMenuClick}
        theme="light"
        mode="horizontal"
        items={[
          {
            label: 'Store',
            key: '',
          },
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
      <Outlet />
    </>
  );
}

export default HeaderUi;
