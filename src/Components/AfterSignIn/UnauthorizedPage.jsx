import React from 'react';
import { Link } from 'react-router-dom';
import './UnauthorizedPage.css'; // Import the CSS file

function UnauthorizedPage() {
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-card">
        <h1 className="unauthorized-title">Unauthorized</h1>
        <p className="unauthorized-message">
          You do not have permission to access this page. Please contact the administrator if you believe this is an error.
        </p>
        <Link to="/" className="unauthorized-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
