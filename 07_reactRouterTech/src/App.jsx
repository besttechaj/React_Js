import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
