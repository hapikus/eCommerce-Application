import { Image, Card, Typography, message } from 'antd';
import styles from './promo.module.css';

import BannerIndie from '../../../assets/images/firstorder1.webp';

function PromoFirstBuy() {
  const { Meta } = Card;
  const { Paragraph } = Typography;

  const promo = 'FIRST ORDER';

  const copyToClipboard = () => {
    const promoCode = promo;
    navigator.clipboard.writeText(promoCode)
    message.success(`Promo code ${promoCode} copied to clipboard`);
  };
  const iconPlaceholder = <span style={{display: 'none'}} />

  return (
    <div className={styles.promoBannerFirstOrder}>
        <Paragraph
          copyable={{
            text: `${promo}`,
            tooltips: false,
            icon: [iconPlaceholder , iconPlaceholder ],
          }}
          onClick={() => copyToClipboard()}
        >
          <div className={styles.bannerCont}>
          <div className={styles.mask} />
        <Image
          src={BannerIndie}
          alt="CAPSULE"
          width="100%"
          className={styles.bannerImg}
        />
        <Card bordered={false} className={styles.bannerDesc}>
          <Meta
            title={<span className={styles.bannerCardTitle}>FIRST ORDER</span>}
            description={
              <span className={styles.bannerCardDesc}>
                Welcome bonus for new customers! Get a discount on your first
                order on our website.
              </span>
            }
          />
        </Card>
      </div>
        </Paragraph>
    </div>
  );
}

export default PromoFirstBuy;
