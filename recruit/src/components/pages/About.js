import React, { useState } from 'react';
import '../../App.css';
import './About.css';
import Footer from '../Footer';

function About() {

    // Instagram 페이지 URL
    const instagramUrl = 'https://www.instagram.com/likelion_konkuk.univ/'
    // Instagram 페이지로 이동하는 함수
    const goToInstagramPage = () => {
      window.open(instagramUrl, '_blank'); // 새 창에서 Instagram 페이지 열기
    }

     //HTTP GET 요청보내기
    const testGetJava = async () => {
      try {
        const apiPath = `http://3.37.130.241:8080/api/images/backend/1`;
        const response = await fetch(apiPath); // await를 사용하여 비동기적으로 데이터를 받음
        const data = await response.json(); // JSON 데이터로 변환

        console.log(data.photo); // 이미지 URL 출력
      } catch (error) {
        console.error(error);
      }
    };


  return (
      <div className='about-page'>

        {/* linktree */}
        <div className='link-box'>
          <div className='imgBox'>
            <img src="image/link-Box.png" className="Group19" alt="imgbox"/>
            <div className='overlay-title' onClick={testGetJava}>
              <p>about us</p>
            </div>

            <div className='insta-img' onClick={goToInstagramPage}>
              <img src='image/insta-img.png' className='group34'/>
            </div>
            <div className='insta-text'>
              <p>@likelion_konkuk.univ</p>
            </div>
          
            <div className='linktree-img'>
              <img src='image/linktree-img.png' className='group35'/>
            </div> 
            <div className='linktree-text'>
              <p>https://linktr.ee/likelion.ku</p>
            </div>
          </div> 
          <div className='clickicon'>
            <img src="image/clickicon.png" className="clickicon" alt="click"/>
          </div>
        </div>


        {/* credit */}
        <div className='credit'>
          <div className='title'>
            만든이들</div>

           {/* UI/UX */}
          <div className='sub-title'>
            [UI/UX]</div>
            <div className='sub-heading'>
              기획</div>
            <div className='name'>
            <div className="br-gap1" style={{ marginBottom: '5px' }} />
            컴퓨터공학과 17 김태현</div>
            <div className='sub-heading'>
              디자인</div>
            <div className='name'>
            <div className="br-gap1" style={{ marginBottom: '5px' }} />
            스마트ICT융합공학과 18 김현경</div>

           {/* 프론트*/}
           <div className='sub-title'>
            [프론트엔드]
            <div className="br-gap1" style={{ marginBottom: '22px' }} /> 
            </div>
            <div className='name'>
              국제무역학과 19 김지흔
              <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
              스마트ICT융합공학과 20 김지현
              <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
              경영학과 21 신준용
              <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
              국제무역학과 21 김진서
            </div>

            {/* 백엔드*/}
          <div className='sub-title'>
            [백엔드]</div>
            <div className='sub-heading'>
              JAVA</div>
            <div className='name'>
            <div className="br-gap1" style={{ marginBottom: '5px' }} />
            융합생명공학과 17 정제원
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 17 최병찬
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 18 곽민재
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 20 강찬욱
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 21 정연채
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 21 강민희<br />
            </div>
            <div className='sub-heading'>
             PYTHON</div>
            <div className='name'>
            <div className="br-gap1" style={{ marginBottom: '5px' }} /> 
            스마트ICT융합공학과 19 이홍석
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 20 손수빈
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            컴퓨터공학과 21 김정은
            <div className="br-gap1" style={{ marginBottom: '3px' }} /> 
            경영학과 23 노선재<br />
            </div>
          <div className='source'>
            <p>아이콘 출처<br />
            Flaticon.com</p>
          </div>
        </div> 
        <Footer />
      </div>
  );
}

export default About;