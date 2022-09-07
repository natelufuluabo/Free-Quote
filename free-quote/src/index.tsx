import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <React.StrictMode>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </React.StrictMode>
    </RecoilRoot>
  </BrowserRouter>
);

