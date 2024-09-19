import React, { useState, useEffect } from 'react';
import './Home.css';
import './HomePage.css'
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import Features from './Features';
import HomeGallery from './HomeGallery';
import HomeUpcomingEvents from './HomeUpcomingEvents';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { id: 1, src: 'assets/clgimages/clgimg1.jpg', alt: 'College Entrance', caption: 'Welcome to KPT Mangalore' },
    { id: 2, src: 'assets/clgimages/clgimg2.jpg', alt: 'Graduation Ceremony', caption: 'Celebrating 75th Amrith Mahotsava' },
    { id: 2, src: '/assets/clgimages/clgimg3.jpg', alt: 'Graduation Ceremony', caption: 'ಕೆಪಿಟಿ ಮಂಗಳೂರು' },
    { id: 2, src: '/assets/clgimages/clgimg4.jpg', alt: 'Graduation Ceremony', caption: '75 ನೇ ಅಮೃತ ಮಹೋತ್ಸವ' },
    { id: 2, src: '/assets/clgimages/clgimg5.jpg', alt: 'Graduation Ceremony', caption: 'Celebrating 75th Amrith Mahotsava' }

  ];

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup interval
  }, [images.length]);



  return (
    <div className="home-container">
      {/* Carousel */}
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
            <div className="carousel-caption">{image.caption}</div>
          </div>
        ))}
      </div>


      <HomeUpcomingEvents />
      <AboutSection />
      <Features />
      <HomeGallery />
      <Testimonials />
    </div>
  );
};



export default Home
