import React, { useState } from 'react';
import './Footer.css';

function Footer() {

  return (
    <>
    <div className="footer-bg">
        <div className='footer-container'>
            <img className="fab fa-typo1" alt="logo" src="image/likelion_logo.png" />
            건국대학교 멋쟁이사자처럼
        </div>
        <p className='info-text'>ⓒ2023. LIKELION KONKUK 11th. All rights reserved.</p>
    </div>
    </>
  );
}

export default Footer;