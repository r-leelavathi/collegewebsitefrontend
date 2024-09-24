import React from 'react';
import Slider from 'react-slick';
import './CollegeCanteen.css';

const CollegeCanteen = () => {
  const carouselSettings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="canteen-container">
      {/* Gallery Section on the Left */}
      <section className="canteen-gallery-section">
        <Slider {...carouselSettings} className="canteen-gallery-slider">
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/1.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/2.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>

          <div className="canteen-gallery-item">
            <img src="/assets/canteen/4.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/5.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/8.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/9.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/10.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/12.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/13.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/15.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/16.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
          <div className="canteen-gallery-item">
            <img src="/assets/canteen/17.jpg" alt="Canteen Interior" className="canteen-gallery-image" />
          </div>
        </Slider>
      </section>

      <div className="canteen-content-section">
        <section className="canteen-overview-section">
          <h2 className="canteen-section-title">Foodcourt</h2>
          <p className="canteen-section-content">
            Our college foodcourt offers a variety of nutritious and delicious meals to keep you energized throughout the day.
          </p>
        </section>

        {/* Menu Section */}
        <section className="canteen-menu-section">
          <h2 className="canteen-section-title">Menu</h2>
          <h3 className="canteen-section-subtitle">Daily Menu</h3>
          <ul className="canteen-menu-list">
            <li>Breakfast: Pancakes, Coffee, Fruit Juice</li>
            <li>Lunch: Chicken Curry, Rice, Salad</li>
            <li>Dinner: Pasta, Garlic Bread, Soft Drinks</li>
          </ul>
        </section>

        {/* Facilities Section */}
        <section className="canteen-facilities-section">
          <h2 className="canteen-section-title">Facilities</h2>
          <ul className="canteen-facilities-list">
            <li>Outdoor Seating</li>
            <li>Hot Food Counters</li>
            <li>Snacks and Beverages</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CollegeCanteen;
