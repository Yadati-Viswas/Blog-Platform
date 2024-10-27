import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Login from './pages/login';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import CommentSection from './components/CommentSection';

const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterUser />} />
      </Routes>
      <CommentSection />
    </BrowserRouter>
   );
};

export default App;
