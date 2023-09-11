import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import MarkupSVGTaro from './components/card';
import { setCurrentPage } from '../../redux/slice/themeSlice';
import { resetProductData } from '../../redux/slice/productSlice';

import { RootState } from '../../redux/store';

import styles from './notFound.module.css';

function NotFound() {
  const dispatch = useDispatch();
  const productErrorState = useSelector(
    (state: RootState) => state.product.errorProduct,
  );

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('not found'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  if (productErrorState) {
    dispatch(resetProductData());
  }

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.infoBlock}>
        <h2 className={styles.title404}>404</h2>
        <h3 className={styles.title404}>Not found</h3>
        <Button>
          <Link to="/main">To main page</Link>
        </Button>
      </div>
      <div className={styles.card}>
        <MarkupSVGTaro />
      </div>
    </div>
  );
}

export default NotFound;
