import { Image, Card } from 'antd';
import styles from './promo.module.css';

import BannerIndie from '../../../assets/images/indie.webp';

function PromoBanner() {
  const { Meta } = Card;
  return (
    <div className={styles.promoBanner}>
      <div className={styles.bannerCont}>
        <div className={styles.mask} />
        <Image
          src={BannerIndie}
          alt="CAPSULE"
          width="100%"
          style={{ height: '100%' }}
          className={styles.bannerImg}
        />
        <Card bordered={false} className={styles.bannerDesc}>
          <Meta
            title={<span className={styles.bannerCardTitle}>SAVE10</span>}
            description={
              <span className={styles.bannerCardDesc}>
                Don’t miss out on your discount!
              </span>
            }
          />
        </Card>
      </div>
    </div>
  );
}

export default PromoBanner;
