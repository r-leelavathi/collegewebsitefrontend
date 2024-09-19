import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'; // Make sure to link your CSS file

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <h3>Departments</h3>
        <p>Explore our diverse range of departments.</p>
        <Link to="/academics/departments" className="feature-button">Explore</Link>
      </div>

      <div className="feature-card">
        <h3>Clubs & Activities</h3>
        <p>Join our vibrant clubs and participate in exciting activities.</p>
        <Link to="/activities/studentunion" className="feature-button">Discover</Link>
      </div>

      <div className="feature-card">
        <h3>Announcements</h3>
        <p>Important circulars, notices, news and announcement section.</p>
        <Link to="/news/circulars" className="feature-button">Read More</Link>
      </div>
    </section>
  );
};

export default Features;
