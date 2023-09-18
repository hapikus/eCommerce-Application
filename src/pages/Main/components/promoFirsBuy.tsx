import { Image, Card } from 'antd';
import styles from './promo.module.css';

import BannerIndie from '../../../assets/images/firstorder1.webp';

function PromoFirstBuy() {
  const { Meta } = Card;
  return (
    <div className={styles.promoBannerFirstOrder}>
      <div className={styles.bannerCont}>
        <div className={styles.mask} />
        <Image
          src={BannerIndie}
          alt="CAPSULE"
          width="100%"
          style={{ height: '100%' }}
          className={styles.bannerImg}
        />
        <Card
          bordered={false}
          className={styles.bannerDesc}
        >
          <Meta title={<span className={styles.bannerCardTitle}>FIRST ORDER</span>}
          description={<span className={styles.bannerCardDesc}>Welcome bonus for new customers! Get a discount on your first order on our website.</span>} />
        </Card>
      </div>
    </div>
  );
}

export default PromoFirstBuy;
