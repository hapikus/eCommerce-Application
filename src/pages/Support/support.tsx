import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';

function Support() {
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('support'));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  return <h1>Support</h1>;
}

export default Support;
