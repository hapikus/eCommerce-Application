import { Image } from 'antd';
import { Link } from 'react-router-dom';

import styles from './component.module.css';
import IProduct from '../../../types/IProduct';

function PopoverCards(props: { products: IProduct[] }) {
  const { products } = props;
  return products.map((product: IProduct) => {
    const { gameTitle, headerImg } = product;
    const url = `${headerImg}`.split('/');
    const gameID = url.pop();
    const baseURL = url.join('/');
    const headerSuffix = 'header.jpg';
    const header = `${baseURL}/${gameID}/${headerSuffix}`;
    return (
      <div className={styles.popoverContainer}>
        <Link
          to={`/product/${gameTitle}`}
          key={gameTitle}
          className={styles.popoverCardContainer}
        >
          <Image
            alt="example"
            src={header}
            height={60}
            width={120}
            style={{ objectFit: 'fill' }}
            preview={false}
          />
          <h3>{gameTitle}</h3>
        </Link>
      </div>
    );
  });
}

export default PopoverCards;
