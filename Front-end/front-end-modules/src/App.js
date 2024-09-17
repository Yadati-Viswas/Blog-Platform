import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Login from './pages/login';
import Home from './pages/Home';

const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   );
};

export default App;
