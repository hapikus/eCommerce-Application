import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './redux/store';
import { setTheme } from './redux/slice/themeSlice';
import antPattern, { getThemeAlgorithm } from './theme/antPattern';

import LayoutPage from './pages/Layout/layout';
import MainPage from './pages/Main/main';
import InfoPage from './pages/Info/info';
import Support from './pages/Support/support';
import LoginPage from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import Product from './pages/Product/product';
import NotFound from './pages/404/notFound';

import styles from './pages/Layout/layout.module.css';
import { checkAuth, setIsFirstLoad } from './redux/slice/authSlice';
import CatalogPage from './pages/catalog/catalog';

function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme.theme);
  const themesState = useSelector((state: RootState) => state.theme.themes);
  const isAuthState = useSelector((state: RootState) => state.auth.isAuth);
  const isFirstLoadState = useSelector(
    (state: RootState) => state.auth.isFirstLoad,
  );

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    dispatch(setTheme(savedTheme));
  }

  const refreshToken = async () => {
    await store.dispatch(checkAuth());
  };

  if (isFirstLoadState && !isAuthState) {
    dispatch(setIsFirstLoad(false));
    refreshToken();
  }

  return (
    <ConfigProvider
      theme={{
        token: antPattern[themeState].token,
        components: antPattern[themeState].components,
        algorithm: getThemeAlgorithm(themeState),
      }}
    >
      <div className="App">
        <Select
          className={styles.theme_switcher}
          defaultValue={themeState}
          autoFocus={false}
          onChange={(value) => {
            dispatch(setTheme(value));
          }}
          options={Object.values(themesState).map((themeMap) => ({
            value: themeMap,
            label: themeMap,
          }))}
        />
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
