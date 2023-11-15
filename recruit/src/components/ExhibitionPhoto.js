import React from 'react';
import './ExhibitionPhoto.css';
import '../App.css'

function ExhibitionPhoto({ activeButton }) {
  let imageUrl;

  switch(activeButton) {
    case '11기':
      imageUrl = 'https://drive.google.com/uc?export=view&id=19-KUmaynk6AyEMeuDT3DJHEneYgROFfu';
      break;
    case '12기':
      imageUrl = 'https://drive.google.com/uc?export=view&id=1ygpIzYWvgAeooUZ8ahC59KImUNd-q5qX';
      break;
    case '13기':
      imageUrl = 'https://drive.google.com/uc?export=view&id=1LuwKoGH8mh3l62nIZYeNqt_rz38kvV2t';
      break;
    default:
      return null;
  }

  return ( 
    <div className='photo-section'>
      <div className='photo-img'>
        <img src={imageUrl} className="photo" alt="photo"/>
      </div>
    </div>
  );
}

export default ExhibitionPhoto;
