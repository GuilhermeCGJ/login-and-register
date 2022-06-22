import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="*" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
