import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Navigate } from 'react-router';
import Home from './templates/Home';
import Header from './components/organisms/Header';
import Register from './templates/Register';
import Login from './templates/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Home" element={<Navigate to="/" />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
