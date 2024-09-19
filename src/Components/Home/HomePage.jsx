import React from 'react';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to KPT Mangalore</h1>
          <p>Building Future Leaders</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="features">
        <div className="feature-card">
          <h3>Departments</h3>
          <p>Explore our diverse range of departments.</p>
          <button className="feature-button">Explore</button>
        </div>
        <div className="feature-card">
          <h3>Clubs & Activities</h3>
          <p>Join our vibrant clubs and participate in exciting activities.</p>
          <button className="feature-button">Discover</button>
        </div>
        <div className="feature-card">
          <h3>Testimonials</h3>
          <p>Hear from our students and alumni about their experiences.</p>
          <button className="feature-button">Read More</button>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="gallery">
        <h2>Campus Life</h2>
        <div className="gallery-grid">
          <img src="campus1.jpg" alt="Campus Image 1" />
          <img src="campus2.jpg" alt="Campus Image 2" />
          <img src="campus3.jpg" alt="Campus Image 3" />
          <img src="campus4.jpg" alt="Campus Image 4" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-card">
          <h3>Annual Sports Meet</h3>
          <p>Date: September 30, 2024</p>
        </div>
        <div className="event-card">
          <h3>Inter-College Quiz Competition</h3>
          <p>Date: October 15, 2024</p>
        </div>
        <div className="event-card">
          <h3>Annual Cultural Fest</h3>
          <p>Date: November 5, 2024</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
