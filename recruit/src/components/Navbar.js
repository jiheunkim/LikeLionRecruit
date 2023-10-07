import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [activeLink, setActiveLink] = useState('');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // 링크 클릭 시 activeLink 업데이트
  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
};

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className={`navbar-logo ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
            <img className="fab fa-typo3" alt="logo" src="image/likelion_logo.png" />
            LIKELION<br></br>KONKUK
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home'
              className={`nav-links ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/apply'
                className={`nav-links ${activeLink === 'apply' ? 'active' : ''}`}
                onClick={() => handleLinkClick('apply')}
              >
                APPLY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/exhibition'
                className={`nav-links ${activeLink === 'exhibition' ? 'active' : ''}`}
                onClick={() => handleLinkClick('exhibition')}
              >
                EXHIBITION
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className={`nav-links ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;