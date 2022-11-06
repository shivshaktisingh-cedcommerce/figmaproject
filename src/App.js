import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dummy from './components/Dummy';
import Home from './components/home/Home';
import Table from './components/home/table/Table';
import LoginComponent from './components/Login/LoginComponent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="home" element={<Home/>}>
          <Route path="dummy" element={<Dummy/>}/>
          <Route path="table" element={<Table/>}/>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
