import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [periodCheck, setPeriodCheck] = useState(true);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const checkPeriod = async () => {
    try {
      const apiPath = `http://3.37.130.241:8080/api/date/check/`;
      const response = await fetch(apiPath); // await를 사용하여 비동기적으로 데이터를 받음
      const data = await response.json();
      setPeriodCheck(data.periodCheck);
    } catch (error) {
      console.error(error);
    }
  };

  // activeLink 상태를 현재 경로에 따라 업데이트
  const activeLink = location.pathname;

  useEffect(() => {
    showButton();
    checkPeriod();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    {periodCheck ? (
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className={`navbar-logo ${activeLink === '/' ? 'active' : ''}`}>
            <img className="fab fa-typo3" alt="logo" src="/image/likelion_logo.png" />
            LIKELION<br></br>KONKUK
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className={`nav-links ${activeLink === '/' ? 'active' : ''}`}>
              HOME
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/apply' className={`nav-links ${activeLink === '/apply' ? 'active' : ''}`}>
              APPLY
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/exhibition' className={`nav-links ${activeLink === '/exhibition' ? 'active' : ''}`}>
              EXHIBITION
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/about' className={`nav-links ${activeLink === '/about' ? 'active' : ''}`}>
              ABOUT
            </Link>
            </li>
          </ul>
        </div>
      </nav>
      ) : (
        <nav className='navbar'>
          <div className='navbar-container'>
          <Link to='/' className={`navbar-logo ${activeLink === '/' ? 'active' : ''}`}>
              <img className="fab fa-typo3" alt="logo" src="/image/likelion_logo.png" />
              LIKELION<br></br>KONKUK
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
              <Link to='/' className={`nav-links ${activeLink === '/' ? 'active' : ''}`}>
                HOME
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/apply-not' className={`nav-links ${activeLink === '/apply-not' ? 'active' : ''}`}>
                APPLY
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/exhibition' className={`nav-links ${activeLink === '/exhibition' ? 'active' : ''}`}>
                EXHIBITION
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/about' className={`nav-links ${activeLink === '/about' ? 'active' : ''}`}>
                ABOUT
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;