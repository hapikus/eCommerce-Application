/* eslint-disable react/react-in-jsx-scope */
import { HashRouter } from 'react-router-dom';
import './pages/Layout/layout.module.css';
import LayoutUi from './pages/Layout/layout';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <LayoutUi />
      </HashRouter>
    </div>
  );
}

export default App;
