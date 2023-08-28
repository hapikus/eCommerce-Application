import { Button } from 'antd';
import IProduct from '../../../types/IProduct';
import styles from '../product.module.css';

interface SystemRequirements {
  [key: string]: string;
}

interface ReqTableProps {
  sysRequirementsMinimum?: SystemRequirements;
  sysRequirementsMinimumFill?: SystemRequirements;
  sysRequirementsRecommended?: SystemRequirements;
}

function MainLeft(productDataState: IProduct) {
  const { gameTitle, price, descriptionLong } = productDataState;

  const paragraphs = descriptionLong.map((paragraph, index) => {
    const paragraphKey = `paragraph_${index}`;
    return <p className={styles.aboutText} key={paragraphKey}>{paragraph}</p>;
  });

  const reqTable: React.FC<ReqTableProps> = ({
    sysRequirementsMinimum,
    sysRequirementsMinimumFill,
    sysRequirementsRecommended,
  }) => {
    if (sysRequirementsMinimumFill) {
      return (
        <div className={styles.minFull}>
          <p className={styles.reqNameForCont}>MINIMUM:</p>
          {Object.entries(sysRequirementsMinimumFill).map(([key, value]) => (
            <div key={key} className={styles.reqRow}>
              <p className={styles.reqText}>
                <span className={styles.reqName}>{ value === 'undefined' ? `${key}` : `${key}:`}</span>
                {value === 'undefined' ? '' : value}
              </p>
            </div>
          ))}
        </div>
      );
    }
    if (sysRequirementsMinimum && sysRequirementsRecommended) {
      return (
        <div className={styles.reqMinAndRec}>
          <div className={styles.reqMin}>
            <p className={styles.reqNameForCont}>MINIMUM:</p>
            {Object.entries(sysRequirementsMinimum).map(([key, value]) => (
              <div key={key} className={styles.reqRow}>
                <p className={styles.reqText}>
                  <span className={styles.reqName}>{ value === 'undefined' ? `${key}` : `${key}:`}</span>
                  {value === 'undefined' ? '' : value}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.reqRec}>
            <p className={styles.reqNameForCont}> RECOMMENDED:</p>
            {Object.entries(sysRequirementsRecommended).map(([key, value]) => (
              <div key={key} className={styles.reqRow}>
                <p className={styles.reqText}>
                  <span className={styles.reqName}>{ value === 'undefined' ? `${key}` : `${key}:`}</span>
                  {value === 'undefined' ? '' : value}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.mainLeft}>
      <div className={styles.priceCont}>
        {`Buy ${gameTitle}`}
        <Button className={styles.priceButton}>
          {price}
        </Button>
      </div>
      <div className={styles.aboutGame}>
        <p className={styles.aboutGameTitle}>ABOUT THIS GAME</p>
        {paragraphs}
      </div>
      <div className={styles.sysReq}>
        <p className={styles.sysReqTitle}>SYSTEM REQUIREMENTS</p>
        {reqTable(productDataState)}
      </div>
    </div>
  );
}

export default MainLeft;
