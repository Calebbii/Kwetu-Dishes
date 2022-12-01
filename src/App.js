import './App.css';
import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar';
import About from './components/About';
import Logo from './components/Logo';
import Contact from './components/Contact';
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Form from './components/Form';

export default function App() {
  return (
  
   <Router>
     <Logo/>
     <NavBar />
     <Routes>

      <Route  path='/' element={< LandingPage/>}></Route>
      <Route exact path='/menu'element={< Home />}></Route>
      <Route exact path='/about'element={< About />}></Route>
      <Route exact path='/form'element={< Form />}></Route>
      <Route exact path='/contact'element={< Contact />}></Route>
     </Routes>
   </Router>
  
   )
}

