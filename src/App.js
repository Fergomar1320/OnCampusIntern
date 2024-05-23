import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Directory from "./components/directory.component";
import Repository from "./components/repository.component";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Directory" element={<Directory />} />
          <Route path="/Repository" element={<Repository />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
