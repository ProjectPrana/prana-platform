import React, { Component } from 'react';
import './components/css/styleZero.css';
import './components/css/style.css';
import Header from './components/allComponents/Header';
import MainBlock from './components/allComponents/MainBloсk';
import Info from './components/allComponents/Info';
import Footer from './components/allComponents/Footer';

function App() {
  return (
    <div className="wrapper">
        <div className="container">
          <Header />
          <MainBlock />   
          <Info />
          <Footer />
        </div>
    </div>
  )
};

export default App;
