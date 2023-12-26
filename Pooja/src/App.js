// App.js

import React from 'react';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import BookNow from './Components/BookNow';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Pooja from './Components/PoojaSelect';


const App = () => {
  return (
    <BrowserRouter>
    <Routes />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/puja" element={<Pooja/>}/>
        {/* Add more routes here for other pages */}
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
