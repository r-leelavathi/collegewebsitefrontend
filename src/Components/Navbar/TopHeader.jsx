import React from 'react';
import './TopHeader.css'; // Import the CSS file

const TopHeader = () => {
  return (
    <div className="header-container">
      <div className="logo-section">
        <img src="/assets/logo/collegelogo.jpg" alt="College Logo" className="college-logo" />
      </div>
      <div className="name-section">
        <h1 className="college-name-english">Karnataka (Govt.) Polytechnic, Mangalore</h1>
        <h2 className="college-name-kannada">ಕರ್ನಾಟಕ  (ಸರ್ಕಾರಿ) ಪಾಲಿಟೆಕ್ನಿಕ್, ಮಂಗಳೂರು</h2>
      </div>
      <div className="amrith-logo-section">
        <img src="/assets/logo/amrithmahotsavalogo.jpg" alt="Department Logo" className="amrith-logo" />
      </div>
    </div>
  );
};


export default TopHeader
