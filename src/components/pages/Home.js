import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from "../section/About";
import Board from "../section/Board";
import Contact from "../section/Contact";
import Events from "../section/Events";
import Sponsors from "../section/Sponsors";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Events />
      <Board />
      <Contact />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Home;
