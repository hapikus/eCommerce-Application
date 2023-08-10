/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import './logo.css';
import { Button, Menu } from 'antd';

function Header() {
  const navigate = useNavigate();

  // type MenuItem = {
  //   label: React.ReactNode;
  //   key: string;
  // };

  function onMenuClick(item: { key: string; }) {
    return navigate(`/${item.key}`);
  }

  return (
    <div className="header">
      <Menu
        style={{ backgroundColor: '#09090b', color: 'white' }}
        onClick={onMenuClick}
        mode="horizontal"
        items={[{
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
