/* eslint-disable react/react-in-jsx-scope */
import { HashRouter } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/footer';
import PageContent from './pages/Layout/layout';

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
