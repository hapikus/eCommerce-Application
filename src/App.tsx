import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import LayoutPage from './pages/Layout/layout';
import MainPage from './pages/Main/main';
import InfoPage from './pages/Info/info';
import Support from './pages/Support/support';
import LoginPage from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import NotFound from './pages/404/notFound';
import { setTheme } from './redux/slice/themeSlice';
import antPattern, { getThemeAlgorithm } from './theme/antPattern';

import styles from './pages/Layout/layout.module.css';

function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state: RootState) => state.theme.theme);
  const themesState = useSelector((state: RootState) => state.theme.themes);

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
        {/* <Radio.Group
          // { Object.values(themesState).map((themeMap) => (
          //   <Select.Option value={themeMap}>{themeMap}</Select.Option>
          // ))}
          className={styles.theme_switcher}
          value={themeState}
          onChange={(e) => {
            dispatch(setTheme(e.target.value));
          }}
        >
          {Object.values(themesState).map((themeMap) => (
            <Radio.Button value={themeMap}>{themeMap}</Radio.Button>
          ))}
        </Radio.Group> */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
