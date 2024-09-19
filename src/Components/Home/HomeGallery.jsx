import React from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import './HomeGallery.css'; // Custom CSS for additional styling

const HomeGallery = () => {
  const settings = {
    dots: true, // Show navigation dots below the carousel
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll on arrow click
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="gallery">
      <h2>Campus Life</h2>
      <Slider {...settings} className="gallery-slider">
        <div>
          <img src="/assets/clgimages/clgimg1.jpg" alt="Campus Image 1" />
        </div>
        <div>
          <img src="/assets/clgimages/clgimg2.jpg" alt="Campus Image 2" />
        </div>
        <div>
          <img src="/assets/clgimages/clgimg3.jpg" alt="Campus Image 3" />
        </div>
        <div>
          <img src="/assets/clgimages/clgimg4.jpg" alt="Campus Image 4" />
        </div>
        <div>
          <img src="/assets/clgimages/clgimg1.jpg" alt="Campus Image 1" />
        </div>
        <div>
          <img src="/assets/clgimages/clgimg2.jpg" alt="Campus Image 2" />
        </div>
      </Slider>
    </section>
  );
};

export default HomeGallery;
