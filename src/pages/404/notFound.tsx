import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { setCurrentPage } from '../../redux/slice/themeSlice';

import styles from './notFound.module.css';

function NotFound() {
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('not found'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.infoBlock}>
        <h2 className={styles.title404}>404</h2>
        <h3 className={styles.title404}>Not found</h3>
        <Button>
          <Link to="/">To main page</Link>
        </Button>
      </div>
      <div className={styles.card} />
    </div>
  );
}

export default NotFound;
