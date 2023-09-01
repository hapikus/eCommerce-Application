import styles from './skeletonLoading.module.css';

function ImgCarouselSkeleton() {
  return (
    <div className={styles.headerBlockContLeft}>
      <div className={`${styles.skeleton} ${styles.carousel}`} />
    </div>
  );
}

function HeaderRightSkeleton() {
  return (
    <div className={styles.headerBlockContRight}>
      <div className={styles.headerImgAdapt}>
        <div className={styles.headerBlockContRight_ImgCont}>
          <div className={`${styles.skeleton} ${styles.headerImg}`} />
        </div>
      </div>
      <div className={styles.headerTextAdapt}>
        <div className={`${styles.skeleton} ${styles.shortDescCont}`} />
        <div className={`${styles.skeleton} ${styles.detailsData}`} />
      </div>
    </div>
  );
}

function mainLeftSkeleton() {
  return (
    <div className={styles.mainLeftCont}>
      <div className={styles.aboutGameCont}>
        <div className={`${styles.skeleton} ${styles.aboutGameTitle}`} />
        <div className={`${styles.skeleton} ${styles.aboutGameText}`} />
      </div>
      <div className={styles.reqCont}>
        <div className={`${styles.skeleton} ${styles.reqTitle}`} />
        <div className={styles.reqTableCont}>
          <div className={`${styles.skeleton} ${styles.reqMin}`} />
          <div className={`${styles.skeleton} ${styles.reqRec}`} />
        </div>
      </div>
    </div>
  );
}

function mainRightSkeleton() {
  return (
    <div className={styles.tagCont}>
      <div className={styles.tagLine}>
        <div className={`${styles.skeleton} ${styles.tagImg}`} />
        <div className={`${styles.skeleton} ${styles.tagText}`} />
      </div>
      <div className={styles.tagLine}>
        <div className={`${styles.skeleton} ${styles.tagImg}`} />
        <div className={`${styles.skeleton} ${styles.tagText}`} />
      </div>
      <div className={styles.tagLine}>
        <div className={`${styles.skeleton} ${styles.tagImg}`} />
        <div className={`${styles.skeleton} ${styles.tagText}`} />
      </div>
      <div className={styles.tagLine}>
        <div className={`${styles.skeleton} ${styles.tagImg}`} />
        <div className={`${styles.skeleton} ${styles.tagText}`} />
      </div>
      <div className={styles.tagLine}>
        <div className={`${styles.skeleton} ${styles.tagImg}`} />
        <div className={`${styles.skeleton} ${styles.tagText}`} />
      </div>
    </div>
  );
}

function randomCartsSkeleton() {
  return (
    <div className={`${styles.skeleton} ${styles.randomCartsCont}`} />
  );
}

function SkeletonLoading() {
  return (
    <div className={styles.mainCont}>
      <div className={`${styles.skeleton} ${styles.title}`}>
        {}
      </div>
      <div className={styles.headerCont}>
        {ImgCarouselSkeleton()}
        {HeaderRightSkeleton()}
      </div>
      <div className={styles.mainInfoCont}>
        {mainLeftSkeleton()}
        {mainRightSkeleton()}
      </div>
      <div className={styles.randomCartCont}>
        {randomCartsSkeleton()}
      </div>
    </div>
  );
}

export default SkeletonLoading;
