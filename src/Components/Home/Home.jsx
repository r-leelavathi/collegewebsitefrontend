import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [events, setEvents] = useState([]);

  const images = [
    { id: 1, src: 'assets/clgimg1.jpg', alt: 'College Entrance', caption: 'Welcome to KPT Mangalore' },
    { id: 2, src: 'assets/clgimg2.jpg', alt: 'Graduation Ceremony', caption: 'Celebrating 75th Amrith Mahotsava' },
    { id: 2, src: '/assets/clgimg3.jpg', alt: 'Graduation Ceremony', caption: 'ಕೆಪಿಟಿ ಮಂಗಳೂರು' },
    { id: 2, src: '/assets/clgimg4.jpg', alt: 'Graduation Ceremony', caption: '75 ನೇ ಅಮೃತ ಮಹೋತ್ಸವ' },
    { id: 2, src: '/assets/clgimg5.jpg', alt: 'Graduation Ceremony', caption: 'Celebrating 75th Amrith Mahotsava' }

  ];

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup interval
  }, [images.length]);

  useEffect(() => {
    // Mock event data; you can replace this with API calls
    setEvents([
      { id: 1, text: 'College Sports Day - September 20, 2024' },
      { id: 2, text: 'Tech Fest - October 10, 2024' },
      { id: 3, text: 'Annual Cultural Night - November 15, 2024' }
    ]);
  }, []);

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

      {/* Scrolling Event Bar */}
      <div className="event-bar">
        <h4>Upcoming Events</h4>
        <div className="event-scroll">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              {event.text}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content Sections */}
      <section className="about-section">
        <h2>About Our College</h2>
        <p>
          XYZ College is a premier institution that fosters innovation, learning, and excellence. Our mission is to provide quality education and to prepare students for the global stage.
        </p>
      </section>

      <section className="courses-section">
        <h2>Our Courses</h2>
        <div className="courses-list">
          <div className="course-item">
            <h3>Automobile Engineering</h3>
            {/* <p>I year = Boys () + Girls () = Total ()
              <br />II year = Boys () + Girls () = Total ()
              <br />III year = Boys () + Girls () = Total ()</p> */}
          </div>
          <div className="course-item">
            <h3>Chemical Engineering</h3>
            <p></p>
          </div>
          <div className="course-item">
            <h3>Civil Engineering</h3>
            <p></p>
          </div><div className="course-item">
            <h3>Computer Science and Engineering</h3>
            <p></p>
          </div><div className="course-item">
            <h3>Electrical and Electronics Engineering</h3>
            <p></p>
          </div><div className="course-item">
            <h3>Electronics and Communication Engineering</h3>
            <p></p>
          </div><div className="course-item">
            <h3>Mechanical Engineering</h3>
            <p></p>
          </div><div className="course-item">
            <h3>Polymer Engineering</h3>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Home
