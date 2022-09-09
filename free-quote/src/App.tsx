import React from 'react';
import './App.css';
import NavbarComponent from './Components/Navbar Component/NavbarComponent';
import GetAQuotePage from './Pages/Get A Quote /GetAQuotePage';
import ProductsPage from './Pages/Products/ProductsPage';
import ContactPage from './Pages/Contact/ContactPage';
import ReviewPage from './Pages/Review Application/ReviewPage';
import ViewApplicationPage from './Pages/View Application/ViewApplicationPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<GetAQuotePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/review' element={<ReviewPage />} />
        <Route path='/applications' element={<ViewApplicationPage />} />
      </Routes>
    </>
  );
}

export default App;