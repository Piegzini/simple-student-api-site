import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navigaton from './components/Navigaton';
import Register from './routes/Register';

function App() {
  return (
    <BrowserRouter>
      <Navigaton />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
