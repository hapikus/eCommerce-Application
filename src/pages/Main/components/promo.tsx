import { Image, Card, message, Typography } from 'antd';
import styles from './promo.module.css';

function PromoBanner(props: {
  promo: string;
  promoDesc: string;
  banner: string;
}) {
  const { Meta } = Card;
  const { Paragraph } = Typography;

  const { promo, promoDesc, banner } = props;

  const copyToClipboard = () => {
    const promoCode = promo;
    navigator.clipboard.writeText(promoCode);
    message.success(`Promo code ${promoCode} copied to clipboard`);
  };
  const iconPlaceholder = <span style={{ display: 'none' }} />;

  return (
    <div className={styles.promoBanner}>
      <Paragraph
        copyable={{
          text: `${promo}`,
          tooltips: false,
          icon: [iconPlaceholder, iconPlaceholder],
        }}
        onClick={() => copyToClipboard()}
      >
        <div className={styles.bannerCont}>
          <div className={styles.mask} />
          <Image
            src={banner}
            alt="CAPSULE"
            width="100%"
            className={styles.bannerImg}
          />
          <Card bordered={false} className={styles.bannerDesc}>
            <Meta
              title={<span className={styles.bannerCardTitle}>{promo}</span>}
              description={
                <span className={styles.bannerCardDesc}>{promoDesc}</span>
              }
            />
          </Card>
        </div>
      </Paragraph>
    </div>
  );
}

export default PromoBanner;
