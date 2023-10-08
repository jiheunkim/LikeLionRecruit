import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 400px);
  z-index: 2; 
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-color: none;
`;

const LeftButton = styled(Button)`
  background-image: url('image/buttonL.png');
  border: 0;
  margin-right: 350px;
  background-color: transparent;
`;

const RightButton = styled(Button)`
  background-image: url('image/buttonR.png');
  border: 0;
  margin-left: 350px;
  background-color: transparent;
`;

const Image = styled.img`
  width: 768px;
  height: 408px;
  object-fit: contain;
  background-color: blue;
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
    config: config.stiff
  };

  slides = [
    {
      key: uuidv4(),
      content: <Image src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuidv4(),
      content: <Image src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuidv4(),
      content: <Image src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: uuidv4(),
      content: <Image src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuidv4(),
      content: <Image src="https://picsum.photos/800/804/?random" alt="5" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

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
    goToSlide = (goToSlide - 1 + this.slides.length) % this.slides.length; 
    this.setState({ goToSlide });
    };
    
    handleNextSlide= () => {
    let { goToSlide } = this.state; 
    goToSlide= (goToSlide+1)%this.slides.length; 
    this.setState({goToSlide});
    };
  render() {
    return (
        <div
          style={{ width: "80%", 
                  height: "500px", 
                  margin: "0 auto", 
                  textAlign: "center", 
                  position: "relative", 
                  backgroundColor: "purple"}}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
        >
        <Carousel 
          slides={this.slides}
          goToSlide={this.state.goToSlide}
        />
        <ButtonContainer>
          <LeftButton onClick ={this.handlePrevSlide} />
          <RightButton onClick ={this.handleNextSlide} />
        </ButtonContainer>
      </div>
    );
  }
}
