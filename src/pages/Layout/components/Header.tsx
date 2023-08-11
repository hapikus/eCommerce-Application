/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from 'antd';
import styles from '../layout.module.css';

function Header() {
  const navigate = useNavigate();

  function onMenuClick(item: { key: string }) {
    return navigate(`/${item.key}`);
  }

  return (
    <div className={styles.header}>
      <Menu
        style={{ backgroundColor: '#09090b', color: 'white' }}
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: 'Store',
            key: '',
          },
          {
            label: <Button>Log in</Button>,
            key: 'login',
          },
          {
            label: <Button>Sign up</Button>,
            key: 'signup',
          },
        ]}
      />
    </div>
  );
}

export default Header;
