import React from 'react';
import './CCTEK.css'; // Import CSS for CCTEK page

const CCTEK = () => {
  return (
    <div className="cctek-container">
      {/* <header className="cctek-header">
        <h1>The Centre for Continuing Technical Education in Karnataka (CCTEK).</h1>
      </header> */}

      <section className="cctek-intro">
        <div className="cctek-image">
          <img src="/assets/clgimages/clgimg1.jpg" alt="CCTEK Training" />
        </div>
        <div className="cctek-description">
          <h2>The Centre for Continuing Technical Education in Karnataka (CCTEK)</h2>
          <p>
            CCTEK offers various skill development courses for the community, focusing on both technical and non-technical skills.
            Our mission is to empower individuals by providing high-quality training in areas like tailoring, computer basics,
            electrical skills, and more. Our courses are designed to help people improve their employment prospects and entrepreneurial
            opportunities.
          </p>
        </div>
      </section>

      <section className="cctek-courses">
        <h2>Courses Offered</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Tailoring</h3>
            <p>Learn the basics of tailoring, including cutting, stitching, and garment designing.</p>
          </div>
          <div className="course-card">
            <h3>Computer Basics</h3>
            <p>Master the fundamentals of computing, including MS Office, internet usage, and digital literacy.</p>
          </div>
          <div className="course-card">
            <h3>Electrical Training</h3>
            <p>Hands-on training in basic electrical work, wiring, and repair techniques.</p>
          </div>
          <div className="course-card">
            <h3>Soft Skills</h3>
            <p>Develop communication, teamwork, and problem-solving skills essential for any workplace.</p>
          </div>
        </div>
      </section>

      <footer className="cctek-footer">
        <p>
          For more information, contact us at <a href="mailto:info@cctek.com">kptmng@gmail.com</a> or call
          <a href="tel:+919876543210"> (0824) - 3516910</a>
        </p>
      </footer>
    </div>
  );
};

export default CCTEK;
