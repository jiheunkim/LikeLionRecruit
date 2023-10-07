import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';

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
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 70px;
  & > ${Button}:not(:first-child) {
    margin-left :70px; 
}
`;

function Exhibition() {
  const [activeButton, setActiveButton] = useState('11기');

  return (
      <>
      <div className="App-back">
            <ButtonContainer>
              <Button 
                  style={{color: activeButton === '11기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => setActiveButton('11기')}
              >
                  {"11기"}
              </Button>
              <Button 
                  style={{color: activeButton === '12기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => setActiveButton('12기')}
              >
                  {"12기"}
              </Button>
              <Button 
                  style={{color: activeButton === '13기' ? '#000000' : '#B9B9B9'}} 
                  onClick={() => setActiveButton('13기')}
              >
                  {"13기"}
              </Button>
              </ButtonContainer>
      </div>
      </>
  );
}

export default Exhibition;