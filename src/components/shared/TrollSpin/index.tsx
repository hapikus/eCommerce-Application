import { Spin } from 'antd';
import styles from './TrollSpinner.module.css';

const trollUrl = 'https://poestack.com/_next/image?url=%2FKEKW.png&w=96&q=75';

type TrollProps = {
  children: JSX.Element | JSX.Element[];
  spinning: boolean;
};

function TrollSpin({ children, spinning }: TrollProps) {
  const trollFace = (
    <div className={styles.trollContainer}>
      <img src={trollUrl} className={styles.trollIcon} alt="troll-face" />
    </div>
  );
  return (
    <Spin spinning={spinning} indicator={trollFace}>
      {children}
    </Spin>
  );
}

export default TrollSpin;
