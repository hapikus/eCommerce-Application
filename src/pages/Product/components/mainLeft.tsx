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
  const { gameTitle, price, discountPrice, descriptionLong } = productDataState;

  const priceButton = (priceForBlock: number, discountPriceForBlock: number | null) => {
    if (discountPriceForBlock) {
      return (
        <div className={styles.discountCont}>
          <div className={styles.discountSize}>
            {`-${((1 - discountPriceForBlock / priceForBlock) * 100).toFixed(0)}%`}
          </div>
          <div className={styles.doublePriceCont}>
            <div className={styles.regularPriceCont}>
              {`${Number(priceForBlock).toFixed(2)} €`}
            </div>
            <div className={styles.discountPriceCont}>
              {`${Number(discountPriceForBlock).toFixed(2)} €`}
            </div>
          </div>
          <Button className={styles.priceButton}>
            Add to Cart
          </Button>
        </div>
      );
    }
    return (
      <div className={styles.regPriceCont}>
        <div className={styles.regPriceText}>
          {`${Number(priceForBlock).toFixed(2)} €`}
        </div>
        <Button className={styles.addToCartText}>
          Add to Cart
        </Button>
      </div>
    );
  };

  const paragraphs = descriptionLong.map((paragraph, index) => {
    const paragraphKey = `paragraph_${index}`;
    return (
      <p className={styles.aboutText} key={paragraphKey}>
        {paragraph.trim()}
      </p>
    );
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
                <span className={styles.reqName}>
                  {value === 'undefined' ? `${key}` : `${key}:`}
                </span>
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
                  <span className={styles.reqName}>
                    {value === 'undefined' ? `${key}` : `${key}:`}
                  </span>
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
                  <span className={styles.reqName}>
                    {value === 'undefined' ? `${key}` : `${key}:`}
                  </span>
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
        {}
        <div className={styles.mainPriceCont}>
          {priceButton(price, discountPrice)}
        </div>
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
