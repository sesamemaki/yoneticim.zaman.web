import React from "react";
import {Route, Link, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar-index";
import Home from "./components/Home";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
  <div className="App">

  <Navbar />

  <Routes>
  
  <Route path="/" element={<Home/>} exact />
  <Route path="/loginform" element={<LoginForm/>} exact />
  <Route path="/registerform" element={<RegisterForm/>} exact />

  </Routes>

  </div>
  );
}


export default App;
