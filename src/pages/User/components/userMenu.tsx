import {
  UserOutlined,
  HomeOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUserMenu } from '../../../redux/slice/userSlice';
import { RootState } from '../../../redux/store';

const items: MenuProps['items'] = [
  {
    label: 'User profile',
    key: 'userProfile',
    icon: <UserOutlined />,
  },
  {
    label: 'Personal Data',
    key: 'userPersonal',
    icon: <DatabaseOutlined />,
  },
  {
    label: 'Addresses Data',
    key: 'addressesData',
    icon: <HomeOutlined />,
    children: [
      {
        label: 'Shiping Adrresses',
        key: 'userShipping',
      },
      {
        label: 'Billing Adrresses',
        key: 'userBilling',
      },
    ],
  },
];

function UserMenu() {
  const dispatch = useDispatch();
  const currentUserMenu = useSelector(
    (state: RootState) => state.user.currentUserMenu,
  );

  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setCurrentUserMenu(e.key));
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[currentUserMenu]}
      mode="horizontal"
      items={items}
    />
  );
}

export default UserMenu;
