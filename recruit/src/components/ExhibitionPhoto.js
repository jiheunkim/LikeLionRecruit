import React from 'react';
import './ExhibitionPhoto.css';
import '../App.css'
import Footer from './Footer';

function ExhibitionPhoto() {
  return ( 
    <div className='photo-section'>
      <div className='photo-text'>
        <p>PHOTO</p>
      </div>
      <div className='photo-img'>
        <img src="image/photo.png" className="photo" alt="photo"/>
      </div>
    <Footer />
    </div>
  );
}

export default ExhibitionPhoto;