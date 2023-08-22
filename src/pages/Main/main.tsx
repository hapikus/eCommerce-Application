import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';

function MainPage() {
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage(''));
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  return <h1>Main Page</h1>;
}

export default MainPage;
