import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import logoManamano from '../../assets/logo-manamano.jpg'
import logoEducaDigital from '../../assets/logo-educa-digital.png'
import logoTangua from '../../assets/logo-tangua.png'
import Button from '@mui/material/Button'
import { withStyles } from '@mui/styles'
import './Gallery.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ColorButton = withStyles(() => ({
  root: {
    textTransform: 'none',
    position: 'absolute',
    bottom: 0,
    centerMode: true,
    left: 0, 
    width: '100%',
    borderRadius: 10,
    fontFamily: 'Lato',
    fontWeight: 300,
    backgroundColor: '#ffbd59',
    '&:hover': {
      backgroundColor: '#13BADE',
      fontWeight: 'bold',
    },
  },
}))(Button)

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openChat: false,
    }
  }

  handleClick1(){
    window.open('https://educadigital.org.br/', '_blank');
  }

  handleClick2(){
    window.open('http://manamano.org.br/', '_blank');
  }

  handleClick3(){
    window.open('https://tangua.rj.gov.br/home/', '_blank');
  }
  

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 3200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
      <div className='carrossel'>
        <Slider {...settings}>
          <div className='carrossel-item'>
            <img
              style={{ height: '80%', margin: 'auto'}}
              src={logoEducaDigital}
              role="presentation"
              alt="Educa Digital"
            />
            <ColorButton
              variant="contained"
              className="button"
              disableElevation
              onClick={this.handleClick1}
            >
              Educa Digital
            </ColorButton>
          </div>
          <div className='carrossel-item'>
            <img
              style={{ height: '80%', margin: 'auto'}}
              src={logoManamano}
              role="presentation"
              alt="ManaMano"
            />
            <ColorButton
              variant="contained"
              className="button"
              disableElevation
              onClick={this.handleClick2}
            >
              ManaMano
            </ColorButton>
          </div>
          <div className='carrossel-item'>
            <img
              style={{ height: '80%', margin: 'auto'}}
              src={logoTangua}
              role="presentation"
              alt="Tanguá"
            />
            <ColorButton
              variant="contained"
              className="button"
              disableElevation
              onClick={this.handleClick3}
            >
              Prefeitura de Tanguá
            </ColorButton>
          </div>
        </Slider>
      </div>
   
    )
  }
}

export default Carousel
