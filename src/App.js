import React, { Component } from 'react';
//import './components/css/styleZero.css';
import "./components/scss/style.scss";
import Header from './components/allComponents/Header/Header';
import MainBlock from './components/allComponents/MainBlock/MainBloсk';
import Info from './components/allComponents/Info/Info';
import Footer from './components/allComponents/Footer/Footer';

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
