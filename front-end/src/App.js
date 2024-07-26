import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import ShopContextProvider from './context/ShopContext';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kid_banner from './components/assests/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Item/>
      <ShopContextProvider>
      <Routes>

        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </ShopContextProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
