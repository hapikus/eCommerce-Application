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
      colorLink: '#000',
      colorLinkActive: '#91caff',
      colorLinkHover: '#003eb3',
    },
    components: {
      Layout: {
        colorBgHeader: '#eae7ea',
        colorBgBody: '#fff',
      },
      Button: {
        borderColorDisabled:'#52c41a'
      }
    },
  },
  [themes.dark]: {
    token: {
      colorBgContainer: '#171a21',
      colorText: '#fff',
      colorLink: '#fff',
      colorLinkActive: '#0958d9',
      colorLinkHover: '#4096ff',
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
