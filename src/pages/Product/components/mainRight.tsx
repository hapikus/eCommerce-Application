import { Image } from 'antd';
import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

const iconLing = {
  Universal: 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png',
  'Single-player': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png',
  'Online Co-op': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_coop.png',
  'Full controller support': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_controller.png',
  'In-App Purchases': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cart.png',
  'Remote Play on Phone': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Remote Play on Tablet': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Remote Play on TV': 'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Tracked Controller Support': 'https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vr_input_motion.png',
  'VR Only': 'https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vr_support.png',
};

const getTagLine = (tag: string) => {
  if (tag.includes('Steam') || tag.includes('Valve')) {
    return null;
  }
  const linkForImg = (iconLing as Record<string, string>)[tag] || iconLing.Universal;
  return (
    <div key={tag} className={styles.tagCont}>
      <div className={styles.tagImg}>
        <Image
          width={24}
          height={16}
          src={linkForImg}
          preview={false}
        />
      </div>
      <div className={styles.tagTextCont}>
        <p className={styles.tagText}>{tag}</p>
      </div>
    </div>
  );
};

function MainRight(productDataState: IProduct) {
  const { category } = productDataState;
  return (
    <div className={styles.mainRight}>
      <div className={styles.tagsCont}>
        {category.map((value) => getTagLine(value))}
      </div>
    </div>
  );
}

export default MainRight;
