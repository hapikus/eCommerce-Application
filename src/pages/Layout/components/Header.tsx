/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, Outlet } from 'react-router-dom';
import { Button, Menu } from 'antd';
import styles from '../layout.module.css';

function HeaderUi() {
  const navigate = useNavigate();

  function onMenuClick(item: { key: string }) {
    return navigate(`/${item.key}`);
  }

  return (
    <>
      <div className={styles.logotip} />
      <Menu
        style={{
          backgroundColor: 'black',
          color: 'white',
          height: 70,
          fontSize: 24,
        }}
        onClick={(item) => onMenuClick(item)}
        theme="light"
        mode="horizontal"
        items={[
          {
            label: 'Store',
            key: '',
          },
          {
            label: (
              <Button style={{ backgroundColor: '#DCFF50' }}>Log in</Button>
            ),
            key: 'login',
          },
          {
            label: <Button>Sign up</Button>,
            key: 'signup',
          },
        ]}
      />
      <Outlet />
    </>
  );
}

export default HeaderUi;
