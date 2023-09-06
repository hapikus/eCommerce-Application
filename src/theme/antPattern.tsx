import { theme } from 'antd';
import { themes } from '../redux/slice/themeSlice';

const getThemeAlgorithm = (currentTheme: string) => {
  if ([themes.light, themes.barbie].includes(currentTheme)) {
    return theme.defaultAlgorithm;
  }
  return theme.darkAlgorithm;
};

const antPattern = {
  [themes.light]: {
    token: {
      colorBgContainer: '#eae7ea',
      colorText: '#000',
    },
    components: {
      Layout: {
        colorBgHeader: '#eae7ea',
        colorBgBody: '#fff',
      },
    },
  },
  [themes.dark]: {
    token: {
      colorBgContainer: '#171a21',
      colorText: '#fff',
    },
    components: {
      Layout: {
        colorBgHeader: '#171a21',
        colorBgBody: '#417a9b',
      },
    },
  },
  [themes.barbie]: {
    token: {
      colorBgContainer: '#ffe6f9',
      colorText: '#000',
      colorPrimary: '#08979c',
    },
    components: {
      Layout: {
        colorBgHeader: '#ffe6f9',
        colorBgBody: '#417a9b',
      },
    },
  },
};
export { getThemeAlgorithm };
export default antPattern;
