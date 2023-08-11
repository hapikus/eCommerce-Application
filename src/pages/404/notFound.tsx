/* eslint-disable react/react-in-jsx-scope */
import styles from './notFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundPage}>
      <h2 className={styles.title404}>404</h2>
      <h3 className={styles.title404}>Not found</h3>
      <div className={styles.card} />
    </div>
  );
}

export default NotFound;
