import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mid from './components/Mid';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Mid></Mid>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
