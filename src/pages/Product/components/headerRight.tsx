import { Image } from 'antd';

import styles from '../product.module.css';
import IProduct from '../../../types/IProduct';

interface UserReviewRow {
  ReviewSummary: string;
  ResponsiveHidden: string;
}

const getReview = (reviewArr: UserReviewRow[]) => {
  if (reviewArr.length === 1) {
    return (
      <div className={styles.allReview}>
        <p className={styles.reviewText}>ALL REVIEWS:</p>
        <p>
          <span className={styles.reviewTextResult}>{reviewArr[0].ReviewSummary}</span>
          <span>{reviewArr[0].ResponsiveHidden}</span>
        </p>
      </div>
    );
  }
  if (reviewArr.length === 2) {
    return (
      <>
        <div className={styles.recentReview}>
          <p className={styles.reviewText}>RECENT REVIEWS:</p>
          <p>
            <span className={styles.reviewTextResult}>{reviewArr[0].ReviewSummary}</span>
            <span>{reviewArr[0].ResponsiveHidden}</span>
          </p>
        </div>
        <div className={styles.allReview}>
          <p className={styles.reviewText}>ALL REVIEWS:</p>
          <p>
            <span className={styles.reviewTextResult}>{reviewArr[1].ReviewSummary}</span>
            <span>{reviewArr[1].ResponsiveHidden}</span>
          </p>
        </div>
      </>
    );
  }
  return null;
};

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
      <div className={styles.headerImgAdapt}>
        <div className={styles.headerBlockContRight_ImgCont}>
          <Image
            src={headerImg}
            style={{ objectFit: 'cover' }}
            className={styles.headerImg}
          />
        </div>
      </div>
      <div className={styles.headerTextdapt}>
        <div className={styles.shortDescCont}>
          {descriptionShort}
        </div>
        <div className={styles.detailsData}>
          {getReview(userReviewRows)}
          <div className={styles.releaseDate}>
            <p className={styles.releaseText}>RELEASE DATE:</p>
            <p>
              <span>{releaseDate}</span>
            </p>
          </div>
          <div className={styles.developData}>
            <p className={styles.developText}>DEVELOPER:</p>
            <p>
              <span>{devCompany.trim()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
