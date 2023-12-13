import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const WordCarousel = () => {
  const words = ['"Impressed by this crypto product website! Seamless UX, easy portfolio management, and helpful support. A game-changer in the crypto world."', '"This crypto product website with its Telegram bot is impressive! The seamless user experience, easy portfolio management, real-time market data, and responsive support team make it a game-changer. Highly recommended!"', '"I cant believe how incredible this crypto product website is! Seamlessly manage your portfolio, access real-time market data, and get outstanding support."', ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable automatic sliding
    autoplaySpeed: 2000,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="word-carousel">
      <Slider {...settings}>
        {words.map((word, index) => (
          <div key={index} className="carousel-item">
            {word}
          </div>
        ))}
      </Slider>
      <div className="carousel-indicators">
        {words.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WordCarousel;