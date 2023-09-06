import { Image } from 'antd';
import { Link } from 'react-router-dom';

import IProduct from '../../../types/IProduct';

import styles from '../product.module.css';

const iconLing = {
  Universal:
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png',
  'Single-player':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png',
  'Online Co-op':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_coop.png',
  'Full controller support':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_controller.png',
  'In-App Purchases':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cart.png',
  'Remote Play on Phone':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Remote Play on Tablet':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Remote Play on TV':
    'https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_remote_play.png',
  'Tracked Controller Support':
    'https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vr_input_motion.png',
  'VR Only':
    'https://store.akamai.steamstatic.com/public/images/v6/ico/ico_vr_support.png',
};

const getTagLine = (tag: string) => {
  if (tag.includes('Steam') || tag.includes('Valve')) {
    return null;
  }
  const linkForImg =
    (iconLing as Record<string, string>)[tag] || iconLing.Universal;
  return (
    <div key={tag} className={styles.tagCont}>
      <div className={styles.tagImg}>
        <Image width={24} height={16} src={linkForImg} preview={false} />
      </div>
      <div className={styles.tagTextCont}>
        <p className={styles.tagText}>{tag}</p>
      </div>
    </div>
  );
};

function MainRight(productDataState: IProduct) {
  const { category, gameTitle, gameGenre, gameTheme, devCompany } = productDataState;
  return (
    <div className={styles.mainRight}>
      <div className={styles.tagsCont}>
        {category.map((value) => getTagLine(value))}
      </div>
      <div className={styles.additInfoMainCont}>
        <div className={styles.additInfoGameTitle}>
          <p className={styles.additInfoTitle}>TITLE:</p>
          <p className={styles.additInfoText}>{gameTitle}</p>
        </div>
        <div className={styles.additInfoGameTheme}>
          <p className={styles.additInfoTitle}>THEME:</p>
          <p className={styles.additInfoLinks}>
            {gameTheme.map((theme, index) => (
              <p>
                <Link className={styles.genreLink} to="/catalog">
                  {theme}
                </Link>
                {index === gameTheme.length - 1 ? '' : ','}
              </p>
            ))}
          </p>
        </div>
        <div className={styles.additInfoGameGenre}>
          <p className={styles.additInfoTitle}>GENRE:</p>
          <p className={styles.additInfoLinks}>
            {gameGenre.map((genre, index) => (
              <p>
                <Link className={styles.themeLink} to="/catalog">
                  {genre}
                </Link>
                {index === gameGenre.length - 1 ? '' : ','}
              </p>
            ))}
          </p>
        </div>
        <div className={styles.additInfoGameDev}>
          <p className={styles.additInfoTitle}>DEVELOPER:</p>
          <p className={styles.additInfoLinks}>
            {devCompany}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
