import React from 'react';
import './CS.css'; // Ensure you have a corresponding CSS file

const CS = () => {
  return (
    <div className="cs-department-page">
      {/* Vision & Mission Section */}
      <section className="cs-section cs-vision-mission">
        <h2 className="cs-heading">Vision & Mission</h2>
        <p className="cs-paragraph">
          <strong>Vision:</strong> To be a leading department in providing world-class education in engineering and technology.
        </p>
        <p className="cs-paragraph">
          <strong>Mission:</strong> To impart quality education, foster research, and nurture students to meet global challenges.
        </p>
      </section>

      {/* Staff Details Section */}
      <section className="cs-section cs-staff-details">
        <h2 className="cs-heading">Staff Details</h2>
        <table className="cs-table">
          <thead>
            <tr>
              <th className="cs-table-header">Name</th>
              <th className="cs-table-header">Position</th>
              <th className="cs-table-header">Email</th>
              <th className="cs-table-header">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cs-table-cell">John Doe</td>
              <td className="cs-table-cell">Professor</td>
              <td className="cs-table-cell">john.doe@example.com</td>
              <td className="cs-table-cell">123-456-7890</td>
            </tr>
            <tr>
              <td className="cs-table-cell">Jane Smith</td>
              <td className="cs-table-cell">Assistant Professor</td>
              <td className="cs-table-cell">jane.smith@example.com</td>
              <td className="cs-table-cell">123-456-7891</td>
            </tr>
            {/* Add more staff details here */}
          </tbody>
        </table>
      </section>

      {/* Lab Details Section */}
      <section className="cs-section cs-lab-details">
        <h2 className="cs-heading">Lab Details</h2>
        <table className="cs-table">
          <thead>
            <tr>
              <th className="cs-table-header">Lab Name</th>
              <th className="cs-table-header">Equipment</th>
              <th className="cs-table-header">Operating Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cs-table-cell">Computer Lab</td>
              <td className="cs-table-cell">Desktops, Printers</td>
              <td className="cs-table-cell">9 AM - 5 PM</td>
            </tr>
            <tr>
              <td className="cs-table-cell">Electronics Lab</td>
              <td className="cs-table-cell">Oscilloscopes, Multimeters</td>
              <td className="cs-table-cell">10 AM - 6 PM</td>
            </tr>
            {/* Add more lab details here */}
          </tbody>
        </table>
      </section>

      {/* Activities Section */}
      <section className="cs-section cs-activities">
        <h2 className="cs-heading">Activities</h2>
        <table className="cs-table">
          <thead>
            <tr>
              <th className="cs-table-header">Date</th>
              <th className="cs-table-header">Activity</th>
              <th className="cs-table-header">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cs-table-cell">2024-01-15</td>
              <td className="cs-table-cell">Guest Lecture</td>
              <td className="cs-table-cell">Lecture by Dr. Alice Johnson on AI advancements.</td>
            </tr>
            <tr>
              <td className="cs-table-cell">2024-03-20</td>
              <td className="cs-table-cell">Workshop</td>
              <td className="cs-table-cell">Workshop on IoT for beginners.</td>
            </tr>
            {/* Add more activities here */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CS;
