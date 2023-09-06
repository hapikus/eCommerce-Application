import styles from './getDiscount.module.css';

const getDescription = (
  priceDesc: number,
  discountPriceDesc: number | null,
) => {
  if (discountPriceDesc) {
    return (
      <div className={styles.catalogCardTwoPrice}>
        <div className={styles.catalogCardRegPrice}>
          {`${Number(priceDesc).toFixed(2)} €`}
        </div>
        <div className={styles.catalogCardDiscPrice}>
          {`${Number(discountPriceDesc).toFixed(2)} €`}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.catalogCardOnePrice}>
      <div className={styles.catalogCardNormalPrice}>
        {`${Number(priceDesc).toFixed(2)} €`}
      </div>
    </div>
  );
};

export default getDescription;
