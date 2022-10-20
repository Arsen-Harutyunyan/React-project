import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import Menu from './Components/Menu/Menu';
import About from './Pages/AboutPage/AboutPage';
import Contact from './Pages/ContactPage/ContactPage';
import Comedy from './Pages/ComedyPage/ComedyPage';
import Register from './Pages/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Comedy' element={<Comedy/>} />
        <Route exact path='/Register' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
