import { useLayoutEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserMenu from './components/userMenu';
import UserProfile from './components/userProfile';
import UserPersonal from './components/userPersonal';
import UserShipping from './components/userShipping';
import UserBilling from './components/userBilling';

import { setIsFirstLoadUser, getFullUserDataAsync } from '../../redux/slice/userSlice';
import { setCurrentPage } from '../../redux/slice/themeSlice';

import store, { RootState } from '../../redux/store';

import styles from './user.module.css';

function UserPage() {
  const dispatch = useDispatch();

  const memoizedDispatch = useCallback(() => {
    dispatch(setCurrentPage('not found'));
  }, [dispatch]);

  useLayoutEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const isFirstLoading = useSelector((state: RootState) => state.user.isFirstLoad);

  const userFullData = useSelector((state: RootState) => state.user.userFull);
  const currentUserMenu = useSelector((state: RootState) => state.user.currentUserMenu);

  const getUserData = async () => {
    await store.dispatch(getFullUserDataAsync());
  };

  useLayoutEffect(() => {
    if (isFirstLoading && isAuthState) {
      dispatch(setIsFirstLoadUser(false));
      getUserData();
    }
  });

  if (!isAuthState) {
    return <h1>Please login before check user profile</h1>;
  }

  const mainComponents: { [key: string]: React.ComponentType } = {
    userProfile: UserProfile,
    userPersonal: UserPersonal,
    userShipping: UserShipping,
    userBilling: UserBilling,
  };

  const SelectedComponent = mainComponents[currentUserMenu];

  return (
    <div className={styles.userMainCont}>
      <div className={styles.menuCont}>
        <UserMenu />
      </div>
      <div className={styles.mainContantCont}>
        <SelectedComponent />
      </div>
    </div>
  );
}

export default UserPage;
