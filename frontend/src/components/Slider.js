// Slider.js
import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
