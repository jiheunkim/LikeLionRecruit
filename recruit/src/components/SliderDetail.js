import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const StyledImage = styled.img`
  width: 1244px;
  height: 661px;
  object-fit: cover; // 이미지의 비율을 유지하면서 지정된 너비와 높이에 맞춤
  margin-bottom: 50px; // 마진 설정
`;

const ContentContainer = styled.div`
    position: relative;    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    
`;

const Title = styled.h1`
    font-family: Galmuri9;
    font-size: 40px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0.045em;
    text-align:left; 
    margin-top: 100px; //오잉
    margin-bottom: 80px;
`;

const BackButton = styled.button`
   position:absolute; 
   left: 50%;
   top: 100px; // 원하는 값으로 조절하세요.
   transform: translateX(-850%);
   scale: 1.2;
   background-image:url("/image/backarrow.png");
   background-repeat:no-repeat; 
   width :65px ;
   height :65px ;
   border:none ;
   background-color: transparent;
   &:hover {
    cursor:pointer; // 이 부분이 추가되었습니다.
}
`;

const ProducerLabel = styled.div`
    font-family: Galmuri9;
    font-size: 36px;
    font-weight: 400;
    line-height: 47px;
    letter-spacing: 0.045em;
    text-align:left;
    margin-bottom: 30px;
    display:flex; // 이미지와 텍스트를 한 줄에 배치하기 위해
    margin-top: 100px;
`;

const ArrowImage = styled.img`
   width :33px ; // 너비 설정
   height :33px ; // 높이 설정
    margin-top: 7px;
   &:first-child {
      margin-right :35px ;
   }

   &:last-child {
      margin-left :33px ;
   }
`;

const PersonInfo = styled.p`
    font-family: Galmuri9;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.045em;
    text-align: left;
    margin: 0px;
    margin-bottom: 17px;
`;

const BackToListButton = styled.button`
    font-family: Galmuri9;
    font-size: 40px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0.045em;
    text-align: left;
    background-color: transparent; 
    border:none;
    margin-top: 100px;
    margin-bottom: 100px;
    &:hover {
        cursor:pointer;
    }
`;

/* base url: http://34.64.82.240:8080
endpoint: /year/index
method: get
응답형태:
    {
   "p_name": "195", 
   "photos": [
   "ibb.co/k8rMqR7", "ibb.co/JKvxDjt", "ibb.co/cg1kN0D", "ibb.co/rtCWh5P", "ibb.co/Zc47PjC", "ibb.co/q1cTtHC", "ibb.co/jbzRKXL", "https%3A/ibb.co/55v0bf0"], 
   "madeby": [
      {
         "name": "김민주", "m_id": 19, "major": "스마트ICT융합공학과"
      }, 
      {
         "name": "박해솔", "m_id": 19, "major": "산업공학과"
      }, 
      {
         "name": "최병찬", "m_id": 18, "major": "컴퓨터공학과"
      }, 
      {
         "name": "안진모", "m_id": 23, "major": "스마트ICT융합공학과"
      }, 
      {
         "name": "정제원", "m_id": 17, "major": "융합생명공학과"
      }, 
      {
         "name": "강찬욱", "m_id": 22, "major": "컴퓨터공학과"
   }]
} */



function SliderDetail() {
    const { year: yearParam,  team_name } = useParams();
    const year = yearParam.match(/\d+/)[0];
    const [slideData, setSlideData] = useState(null);
    
    useEffect(() => {

        // http get 요청하기
        const fetchData = async () => {
          try {
            const response = await fetch(`http://34.64.82.240:8080/${year}/농토리/`);
            if (!response.ok) {
              throw new Error(`서버 응답 실패, HTTP 상태코드: ${response.status}`);
            }
            const data = await response.json();

            setSlideData(data);
          } catch (error) {
              console.error('에러:', error.message);
          }
        };
        fetchData();
      
      }, [year, team_name]);

  return (
      <>
      <div className="App-back">
        <ContentContainer>
            
            {slideData && (
             <>
                <BackButton onClick={() => window.history.back()} />
                <Title>{slideData.p_name}</Title>
                {slideData.photos.map((photo, i) => (
                  <StyledImage key={i} src={photo} alt={`${slideData.photos}_${i}`} />
               ))}
             </>
           )}
            <ProducerLabel>
               <ArrowImage src="/image/pd_rightarrow.png" alt="right arrow" />
               제작자
               <ArrowImage src="/image/pd_leftarrow.png" alt="left arrow" />
            </ProducerLabel>
            {slideData && slideData.madeby.map((person, index) => (
                <PersonInfo key={index}>{person.major} {person.m_id}학번 {person.name}</PersonInfo>
            ))}
            <BackToListButton onClick={() => window.history.back()}>[목록으로]</BackToListButton> 
        </ContentContainer>
        <Footer></Footer>
      </div>
      </>
  );
}

export default SliderDetail;