import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import About from "./components/section/About";
import Events from "./components/section/Events";
import Board from "./components/section/Board";
import Contact from "./components/section/Contact";
import Sponsors from "./components/section/Sponsors";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Route path='/' exact component={Home} />

      </Router>
    </>
  );
}

export default App;
/*<About title="About" subtitle="about" id="about" />
          <Events title="Events" subtitle="eventsdetail" id="events" />
          <Board title="Board" subtitle="boardMember" id="board" />
          <Contact title="Contact" subtitle="contactinfo" id="contact" />
          <Sponsors title="Sponsors" subtitle="sponsor" id="sponsor" /> */
