import React from 'react';
import './App.css';
import NavbarComponent from './Components/Navbar Component/NavbarComponent';
import GetAQuotePage from './Pages/Get A Quote /GetAQuotePage';
import ProductsPage from './Pages/Products/ProductsPage';
import ContactPage from './Pages/Contact/ContactPage';
import Review from './Pages/Review Application/Review';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<GetAQuotePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </>
  );
}

export default App;