import React from 'react';
import './App.css';
import NavbarComponent from './Components/Navbar Component copy/NavbarComponent';
import GetAQuotePage from './Pages/Get A Quote /GetAQuotePage';
import ProductsPage from './Pages/Products/ProductsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<GetAQuotePage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
