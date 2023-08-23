import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

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
    <div className={styles.container}>
      <SideBar />
    </div>
  );
}

export { SideBar };
export default MainPage;
