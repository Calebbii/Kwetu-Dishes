import './App.css';
import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar';
import About from './components/About';
import {Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
  
   <Router>
     <NavBar />
     <Routes>
     <Route  path='/' element={<Home/>}></Route>
     <Route exact path='/about'element={< About />}></Route>
     </Routes>
   </Router>
  
   )
}