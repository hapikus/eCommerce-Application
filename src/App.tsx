import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './redux/store';
import antPattern, { getThemeAlgorithm } from './theme/antPattern';

import LayoutPage from './pages/Layout/layout';
import MainPage from './pages/Main/main';
import InfoPage from './pages/Info/info';
import Support from './pages/Support/support';
import LoginPage from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import Product from './pages/Product/product';
import UserPage from './pages/User/user';
import NotFound from './pages/404/notFound';
import CatalogPage from './pages/catalog/catalog';
import CartPage from './pages/Cart/cart';

import BasketService from './models/Basket/BasketService';
import { checkAuth, setIsFirstLoad } from './redux/slice/authSlice';
import { setBasketId } from './redux/slice/basketSlice';


function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme.theme);
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const isFirstLoadState = useSelector(
    (state: RootState) => state.auth.isFirstLoad,
  );
  const isAuthLoading = useSelector((state: RootState) => state.auth.isLoading);
  const basketIdState = useSelector(
    (state: RootState) => state.basket.basketId,
  );

  // const savedTheme = localStorage.getItem('theme');

  // if (savedTheme) {
  //   dispatch(setTheme(savedTheme));
  // }

  const refreshToken = async () => {
    await store.dispatch(checkAuth());
  };

  const updateAnonBasketId = async () => {
    if (basketIdState !== '') {
      return;
    }

    const localStorageBasket = window.localStorage.getItem('basketId');
    if (!localStorageBasket) {
      const newBasketId = await BasketService.create();
      window.localStorage.setItem('basketId', newBasketId.data);
    }

    const anonBasket = window.localStorage.getItem('basketId');
    if (anonBasket) {
      dispatch(setBasketId(anonBasket));
    }
  };

  const updateUserBasketId = async () => {
    const basketUserId = await BasketService.getBasketIdFromUser();
    const localStorageBasket = window.localStorage.getItem('basketId');

    if (localStorageBasket === basketUserId.data) {
      if (basketIdState !== basketUserId.data) {
        dispatch(setBasketId(basketUserId.data));
      }
      return;
    }

    if (localStorageBasket && basketUserId.data !== '') {
      const newUserId = await BasketService.mergeBaskets(
        localStorageBasket,
        basketUserId.data,
      );
      window.localStorage.setItem('basketId', newUserId.data);
      if (basketIdState !== newUserId.data) {
        dispatch(setBasketId(newUserId.data));
      }
      return;
    }

    if (localStorageBasket && basketUserId.data === '') {
      await BasketService.addToUser(localStorageBasket);
      if (basketIdState !== localStorageBasket) {
        dispatch(setBasketId(localStorageBasket));
      }
      return;
    }

    if (basketUserId.data !== '' && localStorageBasket === null) {
      window.localStorage.setItem('basketId', basketUserId.data);
      if (basketIdState !== basketUserId.data) {
        dispatch(setBasketId(basketUserId.data));
      }
      return;
    }

    const newBasketId = await BasketService.create();
    await BasketService.addToUser(newBasketId.data);
    window.localStorage.setItem('basketId', newBasketId.data);
    if (basketIdState !== newBasketId.data) {
      dispatch(setBasketId(newBasketId.data));
    }
  };

  if (isFirstLoadState && !isAuthState) {
    dispatch(setIsFirstLoad(false));
    refreshToken();
  }

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    if (isAuthState) {
      updateUserBasketId();
      return;
    }
    if (!isAuthState) {
      updateAnonBasketId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketIdState, isAuthState]);

  return (
    <ConfigProvider
      theme={{
        token: antPattern[themeState].token,
        components: antPattern[themeState].components,
        algorithm: getThemeAlgorithm(themeState),
      }}
    >
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<MainPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product/:productTitle" element={<Product />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
