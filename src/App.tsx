import React, { useEffect } from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home"
import Diag from "./Diag"
import UE from "./Ue"

function MyRoutes() {
  let location = useLocation();
  useEffect(() => {
    document.body.style.backgroundImage = 'url(/images/background.jpg)';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    let currentpath = location.pathname;
    let currentpage = "";

    switch (currentpath) {
      case "/":
      case "/Home":
        currentpage = "home"
        break;
      case "/Diag":
        currentpage = "diag"
        break;
      case "/UE":
        currentpage = "ue"
        break;
      default:
        break
    }

    let nextnavbuttonimg = document.getElementById("navbutton" + currentpage + "id");
    let nextnavtext = document.getElementById("navtext" + currentpage + "id");

    if (nextnavbuttonimg && nextnavtext) {
      nextnavbuttonimg.src = "images/F1AB46F6-5CE1-4CFC-BDDE-27E3DE98CBFE@3x.png";
      nextnavtext.style.opacity = "1";
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Diag" element={<Diag />} />
      <Route path="/UE" element={<UE />} />
    </Routes>
  )
}

function App() {
  return (
    <div>
      <Router>
        <MyRoutes />
      </Router >
    </div >
  )
}

export default App;
