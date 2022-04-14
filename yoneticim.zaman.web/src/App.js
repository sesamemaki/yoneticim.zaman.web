import React from "react";
import {Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar-index";
import Home from "./components/Home";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MyProfile from "./components/MyProfile";
import Efforts from "./components/Efforts/Efforts";
// import DatePicker from "react-date-picker";

function App() {
  return (
  <div className="App">

  <Navbar />

  <Routes>
  
  <Route path="/" element={<Home/>} exact />
  <Route path="/loginform" element={<LoginForm/>} exact />
  <Route path="/registerform" element={<RegisterForm/>} exact />
  <Route path="/myprofile" element={<MyProfile/>} exact />
  <Route path="/efforts" element={<Efforts/>} exact />
  {/* <Route path="/datepicker" element={<DatePicker/>} exact /> */}

  </Routes>

  </div>
  );
}


export default App;
