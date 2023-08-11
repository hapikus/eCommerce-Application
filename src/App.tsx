/* eslint-disable react/react-in-jsx-scope */
import { HashRouter } from 'react-router-dom';
import Header from './pages/Layout/components/Header';
import Footer from './pages/Layout/components/Footer';
import PageContent from './pages/Layout/layout';
import './pages/Layout/layout.module.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <PageContent />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
