import React from 'react';
import Slider from 'react-slick';
import './LibraryGallery.css';

const LibraryGallery = () => {
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
    <section className="librarygallery_gallery">
      <h2>Library Gallery</h2>
      <Slider {...settings} className="librarygallery_slider">
        <div>
          <img src="/assets/library/lib1.jpg" alt="Library Image 1" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib2.jpg" alt="Library Image 2" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib3.jpg" alt="Library Image 3" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib4.jpg" alt="Library Image 4" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib5.jpg" alt="Library Image 5" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib6.jpg" alt="Library Image 6" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib10.jpg" alt="Library Image 9" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib7.jpg" alt="Library Image 7" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib8.jpg" alt="Library Image 8" className="librarygallery-img" />
        </div>
        <div>
          <img src="/assets/library/lib9.jpg" alt="Library Image 9" className="librarygallery-img" />
        </div>
      </Slider>
    </section>
  );
};

export default LibraryGallery;
