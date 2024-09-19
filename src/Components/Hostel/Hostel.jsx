import React from 'react';
import './Hostel.css'; // Assuming you will have a CSS file for styling

const Hostel = () => {
  return (
    <div className="hostel-container">
      <h1>Hostel Information</h1>
      <p className="hostel-note">
        Our college has separate hostels for boys and girls. However, the hostel facilities have been handed over to the Social Welfare Department.
        For any hostel-related inquiries, please consult the Social Welfare office.
      </p>

      <div className="warden-details">
        <h2>Warden Details</h2>
        <div className="warden">
          <h3>Girls Hostel Warden</h3>
          <p>Name: [Warden Name]</p>
          <p>Phone: [Warden Phone Number]</p>
          <p>Email: [Warden Email]</p>
        </div>

        <div className="warden">
          <h3>Boys Hostel Warden</h3>
          <p>Name: [Warden Name]</p>
          <p>Phone: [Warden Phone Number]</p>
          <p>Email: [Warden Email]</p>
        </div>
      </div>

      <div className="hostel-photos">
        <h2>Hostel Photos</h2>
        <div className="photo-grid">
          <img src="[Girls Hostel Image URL]" alt="Girls Hostel" />
          <img src="[Boys Hostel Image URL]" alt="Boys Hostel" />
        </div>
      </div>
    </div>
  );
};

export default Hostel;
