import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Navigate } from 'react-router';
import Home from './routes/Home';
import Header from './components/Header/Header';
import Register from './routes/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Home" element={<Navigate to="/" />} />
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
