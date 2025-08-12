import './App.css';
import React, {useEffect} from 'react';
import AOS from "aos";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
    useEffect (() =>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div className="page-bg">
      <Router>
        <Navbar title="Portfolio" about="About Me" skills="Skills" projects="Projects" contact="Contact"/>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
