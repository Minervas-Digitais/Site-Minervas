import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import logoManamano from '../../assets/logo-manamano.jpg'
import logoEducaDigital from '../../assets/logo-educa-digital.png'
// import logoSesc from '../../assets/logo-sesc.png'
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

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green", fontSize: "14px" }}
//       onClick={onClick}
//     />
//   );
// }

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openChat: false,
    }
  }

  // responsive = {
  //   0: { items: 1 },
  //   300: { items: 1 },
  //   500: { items: 1 },
  //   700: { items: 1 },
  //   871: { items: 2 },
  //   1024: { items: 3 },
  //   1920: { items: 4 },
  //   600: { items: 1 },
  //   960: { items: 2},
  //   1076: { items: 3, itemsFit: 'contain' },
  //   1280: { items: 3, itemsFit: 'fill' },
  //   2200: { items: 1 },
  //   3200: { items: 1 },
  // }

  // openChat = () => {
  //   this.setState({
  //     openChat: true,
  //   })
  // }

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
    const { click } = this.props

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
