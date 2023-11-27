import React, { useState, useEffect } from 'react';
import '../../App.css';
import styled from 'styled-components';
import Slider from '../Slider';
import Footer from '../Footer';
import ExhibitionPhoto from '../ExhibitionPhoto';

const Button = styled.button`
  width: 100px;
  height: 60px;
  font-family: "Galmuri9";
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  border: 0;
  background-color: #EDEBEB;
  &:hover {
    cursor:pointer;
}
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 70px;
  & > ${Button}:not(:first-child) {
    margin-left :70px; 
}
`;

const TextBox = styled.div`
  font-family: "DNFBitBit";
  font-size: 40px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 55px; 
  margin-bottom : 30px; 
`;

function Exhibition() {
  const [activeButton, setActiveButton] = useState('11기');
  const [activeYear, setActiveYear] = useState('year11th');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (buttonName, year) => {
    setActiveButton(buttonName);
    setActiveYear(year);
  }

  return (
      <>
      <div className="App-back">
            <ButtonContainer>
              <Button 
                  style={{color: activeButton === '11기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => handleButtonClick('11기', 'year11th')}
              >
                  {"11기"}
              </Button>
              <Button 
                  style={{color: activeButton === '12기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => handleButtonClick('12기', 'year12th')}
              >
                  {"12기"}
              </Button>
              <Button 
                  style={{color: activeButton === '13기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => handleButtonClick('13기', 'year13th')}
              >
                  {"13기"}
              </Button>
            </ButtonContainer>
            <TextBox>{"PROJECT"}</TextBox>
            <Slider year={activeYear} />
            <TextBox>{"PHOTO"}</TextBox>
            <ExhibitionPhoto activeButton={activeButton} />
            <Footer></Footer>
      </div>
      </>
  );
}

export default Exhibition;