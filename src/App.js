import React from 'react';
import { FaBeer } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Member from './components/Member.jsx';
import About__Us from './components/About__Us';
import Tranning from './components/Tranning';
import Info from './components/Info';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Programs />
      <Member />
      <About__Us />
      <Tranning />
      <Info />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
