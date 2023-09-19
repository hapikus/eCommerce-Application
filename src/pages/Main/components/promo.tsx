import { Image, Card, message, Typography } from 'antd';
import styles from './promo.module.css';

import BannerIndie from '../../../assets/images/indie.webp';


function PromoBanner() {
  const { Meta } = Card;
  const { Paragraph } = Typography;

  const promo = 'SAVE10';

  const copyToClipboard = () => {
    const promoCode = promo;
    navigator.clipboard.writeText(promoCode)
    message.success(`Promo code ${promoCode} copied to clipboard`);
  };
  const iconPlaceholder = <span style={{display: 'none'}} />

  return (
    <div className={styles.promoBanner}>
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
            title={<span className={styles.bannerCardTitle}>SAVE10</span>}
            description={
              <span className={styles.bannerCardDesc}>
                Don’t miss out on your discount!
              </span>
            }
          />
        </Card>
      </div>
        </Paragraph>
    </div>
  );
}
//   const { Meta } = Card;
//   return (
//     <div className={styles.promoBanner}>
//       <div className={styles.bannerCont}>
//         <div className={styles.mask} />
//         <Image
//           src={BannerIndie}
//           alt="CAPSULE"
//           width="100%"
//           style={{ height: '100%' }}
//           className={styles.bannerImg}
//         />
//         <Card bordered={false} className={styles.bannerDesc}>
//           <Meta
//             title={<span className={styles.bannerCardTitle}>SAVE10</span>}
//             description={
//               <span className={styles.bannerCardDesc}>
//                 Don’t miss out on your discount!
//               </span>
//             }
//           />
//         </Card>
//       </div>
//     </div>
//   );
// }

export default PromoBanner;
