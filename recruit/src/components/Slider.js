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
  background-image: url('image/buttonL2.png');
  border: 0;
  margin-right: 350px;
  background-color: transparent;
`;

const RightButton = styled(Button)`
  background-image: url('image/buttonR2.png');
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
    config: config.stiff,
    displayYear: '',
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


  setDisplayYearFromProps = (year) => {
    let displayYear;

    switch(year) {
      case 'year11th':
        displayYear = '11기';
        break;
      case 'year12th':
        displayYear = '12기';
        break;
      case 'year13th':
        displayYear = '13기';
        break;
      default:
        displayYear = '';
    }

    this.setState({displayYear});
  }
  
    async componentDidMount() {
      const year = this.props.year || 'year11th';
      await this.setDisplayYearFromProps(year);
      await this.setSlidesFromData(year);
   }
 
   async componentDidUpdate(prevProps) {
     if(prevProps.year !== this.props.year) {
       const year = this.props.year || 'year11th';
       await this.setDisplayYearFromProps(year);
       await this.setSlidesFromData(year);
     }
   }

     setSlidesFromData = async (year) => {
      let jsonUrl;

      switch(year) {
        case 'year11th':
          jsonUrl = '/dummy/year11th.json';
          break;
        case 'year12th':
          jsonUrl = '/dummy/year12th.json';
          break;
        case 'year13th':
          jsonUrl = '/dummy/year13th.json';
          break;
        default:
          return;
      }

      const response = await fetch(jsonUrl);
      const data = await response.json();

      const slides = data.map((item, index) => ({
        key: uuidv4(),
        content:<Image src={item.photo[0]} alt={item.p_name} />,
        onClick : ()=> this.setState({goToSlide:index})
      }));

      this.setState({slides});
  }

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
          slides={this.state.slides}
          goToSlide={this.state.goToSlide}
        />
        <ButtonContainer>
          <LeftButton onClick ={this.handlePrevSlide} />
          <RightButton onClick ={this.handleNextSlide} />
        </ButtonContainer>
        <h2>{`${this.state.displayYear} 데이터를 받아왔습니다.`}</h2>
      </div>
    );
  }
}
