import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import styles from '../user.module.css';
import getRandomColor from '../../../utils/getRandomColor';

function UserProfile() {
  const userFullData = useSelector((state: RootState) => state.user.userFull);
  const { email } = userFullData;

  const randomColor = getRandomColor();

  return (
    <div className={styles.userProfCont}>
      <div className={styles.UserProfTitle}>
        <h1>{`Welcome ${email}!`}</h1>
      </div>
      <div className={styles.userProfAvatarCont}>
        <Avatar
          shape="square"
          size={128}
          icon={<UserOutlined />}
          style={{ backgroundColor: randomColor }}
        />
      </div>
    </div>
  );
}

export default UserProfile;
