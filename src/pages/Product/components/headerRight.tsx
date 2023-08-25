import { Image } from 'antd';

import styles from '../product.module.css';
import IProduct from '../../../types/IProduct';

function HeaderRight(productDataState: IProduct) {
  const {
    headerImg,
    descriptionShort,
    userReviewRows,
    releaseDate,
    devCompany,
  } = productDataState;
  return (
    <div className={styles.headerBlockContRight}>
      <div className={styles.headerBlockContRight_ImgCont}>
        <Image
          src={headerImg}
          style={{ objectFit: 'cover' }}
          className={styles.headerImg}
        />
      </div>
      <div className={styles.shortDescCont}>
        {descriptionShort}
      </div>
      <div className={styles.detailsData}>
        <div className={styles.recentReview}>
          <p className={styles.reviewText}>RECENT REVIEWS:</p>
          <p>
            <span className={styles.reviewTextResult}>{userReviewRows[0].ReviewSummary}</span>
            <span>{userReviewRows[0].ResponsiveHidden}</span>
          </p>
        </div>
        <div className={styles.allReview}>
          <p className={styles.reviewText}>ALL REVIEWS:</p>
          <p>
            <span className={styles.reviewTextResult}>{userReviewRows[1].ReviewSummary}</span>
            <span>{userReviewRows[1].ResponsiveHidden}</span>
          </p>
        </div>
        <div className={styles.releaseDate}>
          <p className={styles.releaseText}>RELEASE DATE:</p>
          <p>
            <span>{releaseDate}</span>
          </p>
        </div>
        <div className={styles.developData}>
          <p className={styles.developText}>DEVELOPER:</p>
          <p>
            <span>{devCompany.split(':')[1].trim()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
