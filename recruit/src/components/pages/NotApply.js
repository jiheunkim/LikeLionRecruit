import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './Apply.css';
import Footer from '../Footer';

function NotApply() {

  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  return (
      <div className='App-back'>
        <div className='not-apply'>
          <div className='not-apply-main'>
            <div className='popup-t'>!</div>
            <p className='not-apply-text'>지원기간이 아닙니다</p>
            <button className='not-apply-btn' onClick={backHome}>[홈으로 돌아가기]</button>
          </div>
          <Footer />
        </div>
      </div>
  );
}

export default NotApply;