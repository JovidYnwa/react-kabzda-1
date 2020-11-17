import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Technologies from './Technologies';
import Footer from './Footer';



const App = () => {
  return (
    <div className="App">
      <div><Header/></div>
      <div><Technologies/></div>
      <Footer/>
    </div>
  );
}

export default App;
