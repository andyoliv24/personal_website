import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/core/Navbar';
import Home from './pages/Home';
import Footer from './components/core/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
