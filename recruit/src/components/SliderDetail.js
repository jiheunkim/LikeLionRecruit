import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const StyledImage = styled.img`
  width: 1244px;
  height: 661px;
  object-fit: cover;
  margin-bottom: 50px;
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
  text-align: left;
  margin-top: 100px;
  margin-bottom: 80px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-850%);
  scale: 1.2;
  background-image: url("/image/backarrow.png");
  background-repeat: no-repeat;
  width: 65px;
  height: 65px;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ProducerLabel = styled.div`
  font-family: Galmuri9;
  font-size: 36px;
  font-weight: 400;
  line-height: 47px;
  letter-spacing: 0.045em;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  margin-top: 100px;
`;

const ArrowImage = styled.img`
  width: 33px;
  height: 33px;
  margin-top: 7px;
  &:first-child {
    margin-right: 35px;
  }

  &:last-child {
    margin-left: 33px;
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
  border: none;
  margin-top: 100px;
  margin-bottom: 100px;
  &:hover {
    cursor: pointer;
  }
`;

function SliderDetail() {
  const { year: yearParam } = useParams();
  const { item } = useParams();
  const [slideData, setSlideData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (item) {
      // http get 요청하기
      const fetchData = async () => {
        try {
          const response = await fetch(`http://34.64.82.240:8080/${yearParam}/${item}`);
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
    }
  }, [yearParam, item.team_name]);

  return (
    <>
      <div className="App-back">
        <ContentContainer>
          {slideData && (
            <>
              <BackButton onClick={() => window.history.back()} />
              <Title>{slideData.p_name}</Title>
              {slideData.photos.map((photo, i) => (
                <StyledImage key={i} src={`https://${photo}`} alt={`Slide ${i + 1}`} />
              ))}
            </>
          )}
          <ProducerLabel>
            <ArrowImage src="/image/pd_rightarrow.png" alt="right arrow" />
            제작자
            <ArrowImage src="/image/pd_leftarrow.png" alt="left arrow" />
          </ProducerLabel>
          {slideData &&
            slideData.madeby.map((person, index) => (
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
