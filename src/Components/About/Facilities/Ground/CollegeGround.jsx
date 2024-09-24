import React from 'react';
import './CollegeGround.css';

const CollegeGround = () => {
  return (
    <div className="ground-page-container">
      <div className="content">

        {/* Overview Section */}
        <section className="section overview-section">
          <h2 className="section-title">College Ground</h2>
          <p className="section-content">
            Our college ground is a vibrant space designed to support various sports and extracurricular activities. It serves as the heart of our campus life, hosting numerous events and providing students with a place to engage in physical activities and competitions.
          </p>
          <h2 className="section-title">Events and Activities</h2>
          <p className="section-content">
            Our ground hosts a variety of events including sports tournaments, annual sports day, and inter-college competitions. Students and departments can book the ground for events or practice sessions by following the booking procedures.
          </p>
          <h2 className="section-title">Facilities</h2>
          <ul className="facilities-list">
            <li>Football Field</li>
            <li>Cricket Pitch</li>
            <li>Basketball Court</li>
            <li>Tennis Court</li>
            <li>Jogging Track</li>
            <li>Gymnasium</li>
          </ul>
        </section>

        {/* Rules and Regulations Section */}
        <section className="section rules-section">
          <h2 className="section-title">Accessibility</h2>
          <p className="section-content">
            The ground is easily accessible from all parts of the campus. We have dedicated pathways and ramps for differently-abled individuals.
          </p>
          <h2 className="section-title">Rules and Regulations</h2>
          <p className="section-content">
            To ensure the proper use and maintenance of the ground, please adhere to the following guidelines:
            <ul>
              <li>Booking must be done at least one week in advance.</li>
              <li>All users must follow the safety protocols in place.</li>
              <li>Proper sportswear and equipment are required for activities.</li>
            </ul>
          </p>
          <h2 className="section-title">Contact Information</h2>
          <p className="section-content">
            For booking and inquiries, please contact:
            <br />
            <strong>Ground Manager:</strong> Jane Smith
            <br />
            <strong>Email:</strong> <a href="mailto:groundmanager@college.edu">groundmanager@college.edu</a>
            <br />
            <strong>Phone:</strong> +91-1234567890
          </p>
        </section>

        {/* Booking Form Section */}
        <section className="section booking-form-section">
          <h2 className="section-title">Booking Form</h2>
          <form className="booking-form">
            <label htmlFor="event-name">Event Name</label>
            <input type="text" id="event-name" name="event-name" required />

            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="details">Details</label>
            <textarea id="details" name="details" required></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </div>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <h2 className="section-title">College Ground</h2>
        <div className="gallery">
          <div className="gallery-images-wrapper">
            <img src="/assets/groundimages/1.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/2.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/ground2.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/3.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/4.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/5.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/6.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/7.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/8.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/ground3.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/9.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/10.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/11.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/12.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/13.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/14.jpg" alt="Ground Event 1" className="gallery-image" />
            <img src="/assets/groundimages/ground1.jpg" alt="Ground Event 1" className="gallery-image" />

          </div>
        </div>
      </section>

    </div>
  );
};

export default CollegeGround;
