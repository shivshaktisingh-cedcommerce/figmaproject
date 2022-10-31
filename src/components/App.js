import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import LoginComponent from './Login/LoginComponent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
