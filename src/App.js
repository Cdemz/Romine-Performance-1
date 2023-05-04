import React from 'react';
import { FaBeer } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Member from './components/Member.jsx';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Programs />
      <Member />
    </div>
  );
}

export default App;
