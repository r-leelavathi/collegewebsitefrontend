import React from 'react';
import './CollegeCanteen.css';

const CollegeCanteen = () => {
  return (
    <div className="canteen-container">
      {/* Gallery Section on the Left */}
      <section className="gallery-section">
        <div className="gallery">
          <img src="/assets/clgimg1.jpg" alt="Canteen Interior" className="gallery-image" />
          <img src="/assets/clgimg2.jpg" alt="Food Items" className="gallery-image" />
          {/* Add more images as needed */}
        </div>
      </section>

      {/* Main Content on the Right */}
      <div className="content-section">


        {/* Overview Section */}
        <section className="section overview-section">
          <h2 className="section-title">Foodcourt</h2>
          <p className="section-content">
            Our college foodcourt offers a variety of nutritious and delicious meals to keep you energized throughout the day. Open from 9:00 AM to 5:00 PM, we serve breakfast, lunch, and snacks, ensuring students and staff have access to quality food on campus.
          </p>
          <h2 className="section-title">Hours of Operation</h2>
          <p className="section-content">
            Monday to Friday: 9:00 AM - 5:00 PM<br />
            Saturday: 9:00 AM - 1:00 PM<br />
            Sunday: Closed
          </p>
        </section>

        {/* Menu Section */}
        <section className="section menu-section">
          <h2 className="section-title">Menu</h2>
          <h3 className="section-subtitle">Daily Menu</h3>
          <ul className="menu-list">
            <li>Breakfast: Pancakes, Coffee, Fruit Juice</li>
            <li>Lunch: Chicken Curry, Rice, Salad</li>
            <li>Dinner: Pasta, Garlic Bread, Soft Drinks</li>
          </ul>
          <h3 className="section-subtitle">Specials</h3>
          <p className="section-content">Check out our daily specials at the counter!</p>
        </section>

        {/* Facilities Section */}
        <section className="section facilities-section">
          <h2 className="section-title">Facilities</h2>
          <ul className="facilities-list">
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
