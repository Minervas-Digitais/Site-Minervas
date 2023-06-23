import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import exampleimage from "../../assets/example-image.svg"
import  './Gallery.scss'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    59: { items: 2 },
    60: { items: 3 },
    61: { items: 4 },
    62: { items: 5 },
    
};

const items = [
    <div className="item" data-value="1">
        <img className='img-gallery' src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="Escola SESC"/>  
    </div>,
    <div className="item" data-value="2">
        <img className='img-gallery' src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="Educa Digital"/>
    </div>,
    <div className="item" data-value="3">
        <img className='img-gallery' src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="ManaMano"/>
    </div>,
    <div className="item" data-value="4">
        <img className='img-gallery' src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="ManaMano"/>
    </div>,
    <div className="item" data-value="5">
        <img className='img-gallery' src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="ManaMano"/>
    </div>,
];

const Carousel2 = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={true}
        infinite={true}
        animationDuration={3000}
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlayDirection='rtl'
    />
);

export default Carousel2