import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home'
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}


export default App;
