import { Image, Card } from "antd";
import styles from './promo.module.css'

import BannerIndie from '../../../assets/images/indie.webp';

function PromoBanner () {
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
          <Card
            bordered={false}
            className={styles.bannerDesc}
            title={<span className={styles.bannerCardTitle}>PROMO</span>}
          />
        </div>
    </div>
  )
}

export default PromoBanner;
