import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import ShopCategory from './components/shop/ShopCategory';
import CartState from './components/context/CartState';
import ShopingCart from './components/shop/ShopingCart';

function App() {
  return (
    <>
    <CartState>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/shop" element={ <ShopCategory/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/addToCart" element={ <ShopingCart/> } />
      </Routes>
    <Footer/>
    </CartState>
    </>
  );
}

export default App;
