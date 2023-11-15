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

function SliderDetail() {
    const { year, index } = useParams();
    const [slideData, setSlideData] = useState(null);

    useEffect(() => {
        const fetchSlideData = async () => {
            let apiPath;
            
            // HTTP GET 요청보내기
            switch(year) {
                case 'year11th':
                    apiPath = `http://34.64.82.240:8080/11/${index}`;
                    break;
                case 'year12th':
                    apiPath = `http://34.64.82.240:8080/12/${index}`;
                    break;
                case 'year13th':
                    apiPath = `http://34.64.82.240:8080/13/${index}`;
                    break;
                default:
                    return;
            }

            try {
                const response = await fetch(apiPath);
                const data = await response.json();
                setSlideData(data);
              } catch (error) {
                console.error(error);
              }
            };

        fetchSlideData();
    }, [year, index]);


  return (
      <>
      <div className="App-back">
        <ContentContainer>
            
            {slideData && (
             <>
                <BackButton onClick={() => window.history.back()} />
                <Title>{slideData.p_name}</Title>
                {slideData.photo.map((photoUrl, i) => (
                  <StyledImage key={i} src={photoUrl} alt={`${slideData.p_name}_${i}`} />
               ))}
             </>
           )}
            <ProducerLabel>
               <ArrowImage src="/image/pd_rightarrow.png" alt="right arrow" />
               제작자
               <ArrowImage src="/image/pd_leftarrow.png" alt="left arrow" />
            </ProducerLabel>
            {slideData && slideData.madeby.map((person, index) => (
                <PersonInfo key={index}>{person.major}학과 {person.id}학번 {person.name}</PersonInfo>
            ))}
            <BackToListButton onClick={() => window.history.back()}>[목록으로]</BackToListButton> 
        </ContentContainer>
        <Footer></Footer>
      </div>
      </>
  );
}

export default SliderDetail;