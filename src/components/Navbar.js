import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import {Link, animateScroll as scroll} from 'react-scroll';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link activeClass="active"
                to='home' className='navbar-logo'
                spy={true} smooth={true} duration={500}>
            <img name="cseslogo" src="/images-copy/cseslogo.png"
                 width = "160" height = "45" alt="logo"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link activeClass="active" to="about"
                    className="nav-links"
                    spy={true} smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="events"
                    className="nav-links"
                    spy={true} smooth={true} duration={1000}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="board"
                    className="nav-links"
                    spy={true} smooth={true} duration={1000}>
                Board
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="contact"
                    className="nav-links"
                    spy={true} smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="sponsors"
                    className="nav-links"
                    spy={true} smooth={true} duration={1000}>
                Sponsors
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
