import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 400px);
  z-index: 2;
  top: 550px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-color: transparent;
`;

const LeftButton = styled(Button)`
  background-image: url('/image/buttonL5.png');
  border: 0;
  background-color: transparent;
`;

const RightButton = styled(Button)`
  background-image: url('/image/buttonR5.png');
  border: 0;
  background-color: transparent;
  position: absolute;
  left: 750px;
`;

const Image = styled.img`
  width: 768px;
  height: 408px;
  object-fit: contain;
`;



const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Slider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    enableSwipe: true,
    config: config.stiff,
    slides: []
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };
  handlePrevSlide = () => {
    let { goToSlide } = this.state;
    goToSlide = (goToSlide - 1 + this.state.slides.length) % this.state.slides.length; 
    this.setState({ goToSlide });
  };
  
  handleNextSlide= () => {
    let { goToSlide } = this.state; 
    goToSlide= (goToSlide+1)%this.state.slides.length; 
    this.setState({goToSlide});
  };

  
    async componentDidMount() {
      const year = this.props.year || 'year11th';
      await this.setSlidesFromData(year);
   }

   async componentDidUpdate(prevProps) {
     if(prevProps.year !== this.props.year) {
       const year = this.props.year || 'year11th';
       await this.setSlidesFromData(year);
     }
   }



   setSlidesFromData = async (year) => {
    try {
        const numericYear = this.extractNumericYear(year);
        const jsonUrl = `http://34.64.82.240:8080/${numericYear}`;
        const response = await fetch(jsonUrl);

        if (!response.ok) {
          throw new Error(`서버 응답 실패, HTTP 상태코드: ${response.status}`);
        }

          const data = await response.json();

          if (!Array.isArray(data)) {
            throw new Error('서버 응답 배열이 아닙니다.');
          }

          const slides = data.map((item, team_name) => ({
            key: uuidv4(),
            content: (
              <Link
                        to={{
                          pathname: `/projectdetail/${numericYear}/${item.team_name}`,
                          state: { team_name: item.team_name }
                  }}
              >
                  <Image
                    src={`https://${item.photos[0]}`}
                    alt={item.team_name}
                  />
              </Link>

            )
          }));

          this.setState({slides});
      }   catch (error) {
        console.error('에러:', error.message);
      }
    };

  extractNumericYear = (year) => {
    const numericYear = year.match(/\d+/);
    return numericYear ? numericYear[0] : '11';
  }

  
    

  render() {

    return (
      <>
        <div
          style={{
                  position: "relative", // 추가
                  width: "80%",
                  height: "500px",
                  margin: "0 auto",
                  textAlign: "center" }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
        <Carousel
          slides={this.state.slides}
          goToSlide={this.state.goToSlide}
        />
        </div>
        <ButtonContainer>
          <LeftButton onClick ={this.handlePrevSlide} />
          <RightButton onClick ={this.handleNextSlide} />
        </ButtonContainer>
      </>
    );
  }
}