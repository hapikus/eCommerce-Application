import { HashRouter } from 'react-router-dom';
import { useState } from 'react';
import { ConfigProvider, Radio } from 'antd';
import './pages/Layout/layout.module.css';
import LayoutUi from './pages/Layout/layout';

function App() {
  const [currTheme, setCurrTheme] = useState('one');
  const one = {
    colorPrimary: '#000',
    background: '#000',
    colorBgBase: '#000',
    backgroundColor: '#000',
    colorTextBase: 'red',
  };
  const two = {
    colorPrimary: '#eee',
    background: '#eee',
    colorBgBase: '#eee',
    backgroundColor: '#eee',
    colorTextBase: 'red',
  };
  return (
    <ConfigProvider
      theme={{
        token: currTheme === 'one' ? one : two,
      }}
    >
      <div className="App">
        <HashRouter>
          <Radio.Group
            value={currTheme}
            onChange={(e) => {
              setCurrTheme(e.target.value);
            }}
          >
            <Radio value="one">One</Radio>
            <Radio value="two">Two</Radio>
          </Radio.Group>
          <LayoutUi />
        </HashRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
