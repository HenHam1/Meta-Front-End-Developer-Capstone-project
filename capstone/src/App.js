import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';

function App() {
  return (
 
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Testimonials/>
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default App;
