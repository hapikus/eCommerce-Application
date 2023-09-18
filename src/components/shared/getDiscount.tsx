import styles from './getDiscount.module.css';

interface DescriptionProps {
  priceDesc: number;
  discountPriceDesc: number | null;
  promoPrice?: number;
  quantity?: number;
}

function GetDiscount({
  priceDesc,
  discountPriceDesc,
  promoPrice = Infinity,
  quantity = 1,
}: DescriptionProps): React.ReactElement {
  if (promoPrice !== Infinity && promoPrice < priceDesc) {
    return (
      <div className={styles.catalogCardTwoPrice}>
        <div className={styles.catalogCardRegPrice}>
          {`${(Number(priceDesc) * quantity).toFixed(2)} €`}
        </div>
        <div className={styles.catalogCardDiscPrice}>
          {`${(Number(promoPrice) * quantity).toFixed(2)} €`}
        </div>
      </div>
    );
  }

  if (discountPriceDesc && discountPriceDesc < priceDesc) {
    return (
      <div className={styles.catalogCardTwoPrice}>
        <div className={styles.catalogCardRegPrice}>
          {`${(Number(priceDesc) * quantity).toFixed(2)} €`}
        </div>
        <div className={styles.catalogCardDiscPrice}>
          {`${Number(
            Math.min(promoPrice, discountPriceDesc) * quantity,
          ).toFixed(2)} €`}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.catalogCardOnePrice}>
      <div className={styles.catalogCardNormalPrice}>
        {`${(Number(priceDesc) * quantity).toFixed(2)} €`}
      </div>
    </div>
  );
}

GetDiscount.defaultProps = {
  promoPrice: Infinity,
  quantity: 1,
};

export default GetDiscount;
