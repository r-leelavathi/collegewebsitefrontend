import React from 'react'
import Slider from 'react-slick';
import './SocietyGallery.css'
const SocietyGallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Keep arrows enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="societygallery_gallery">
      <h2>Society Gallery</h2>
      <Slider {...settings} className="societygallery_slider">
        <div>
          <img src="/assets/SOCIETY/1.jpg" alt="Library Image 1" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/2.jpg" alt="Library Image 2" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/3.jpg" alt="Library Image 3" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/4.jpg" alt="Library Image 4" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/5.jpg" alt="Library Image 5" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/6.jpg" alt="Library Image 6" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/10.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/7.jpg" alt="Library Image 7" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/8.jpg" alt="Library Image 8" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/9.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/10.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/11.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/12.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/13.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/14.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
        <div>
          <img src="/assets/SOCIETY/15.jpg" alt="Library Image 9" className="societygallery-img" />
        </div>
      </Slider>
    </section>
  );
};

export default SocietyGallery
