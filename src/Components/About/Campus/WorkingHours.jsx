
import React from 'react';
import './WorkingHours.css'; // Import the CSS file

const WorkingHours = () => {
  return (
    <div className="working-hours-container">
      <h2 className="heading">College Working Hours</h2>
      <table className="working-hours-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Working Hours</th>
            <th>Lunch Break</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday - Friday</td>
            <td>9:00 AM - 5:00 PM</td>
            <td>1:00 PM - 2:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9:00 AM - 1:00 PM</td>
            <td>No Lunch Break</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Holiday</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <p className="note">* There will be holidays on all public holidays.</p>
    </div>
  );
};

export default WorkingHours
