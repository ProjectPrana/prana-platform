import React, { Component } from 'react';
import "./components/scss/style.scss";
import Header from './components/allComponents/Header/Header';
import MainBlock from './components/allComponents/MainBlock/MainBloсk';
import Info from './components/allComponents/Info/Info';
import Footer from './components/allComponents/Footer/Footer';

import Sidebar from '../src/components/allComponents/MainBlock/SideBar/Sidebar';
import StudentPage from '../src/components/allComponents/MainBlock/Pages/StudentPage/StudentPage';
import MainLessons from '../src/components/allComponents/MainBlock/Pages/MainLessons/MainLessons';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <MainBlock/>
        <Info />
        <Footer />
      </div>
    </div>
  );
};

export default App;
