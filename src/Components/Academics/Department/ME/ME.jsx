import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding CSS file
import MEStaff from './MEStaff';
import MEActivity from './MEActivity';
import MELab from './MELab';

const ME = () => {
  const [activeSection, setActiveSection] = useState('vision-mission');

  return (
    <div className="ch-page">
      <div className="ch-sidebar">
        <ul>
          <li onClick={() => setActiveSection('vision-mission')}>Vision & Mission</li>
          <li onClick={() => setActiveSection('staff')}>Staff</li>
          <li onClick={() => setActiveSection('activities')}>Activities</li>
          <li onClick={() => setActiveSection('lab')}>Lab Details</li>
        </ul>
      </div>

      <div className="ch-content">
        {activeSection === 'vision-mission' && (
          <section className="ch-section">
            <h2 className="ch-heading">Introduction</h2>
            <p>The Mechanical Engineering Programme was started in the year 1946 with an annual intake of 40. At present, the annual intake is 63 (60+3(SNQ)). This diploma engineering program comes under Department of Technical Education, Bangalore and approved by AICTE, New Delhi. The admission to this program is carried out by Department of Technical Education through On-line Admission. Top rank holders across the state prefer this program in this institution.
              The Mechanical Engineering Programme is outcome based and structured to cater the needs of Industry and Society. The program contents are upgraded with the interaction with industry, alumni and reputed research organizations. A total of 8 full time and 3 part-time experienced faculty members support the programme.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> To impart quality technical education emphasizing on human values, spirit of innovation and sustainable development of society.</p>
            <p><strong>Mission:</strong>
              <li>To impart quality education relevant to the current industrial needs through student centred approach based on pedagogical principles by keeping effective channels of interaction with industry, alumni and all other stake holders.
              </li>
              <li>To promote the spirit of innovation among the students and encourage them to become successfulentrepreneurs.
              </li>
              <li>To develop age with institutions and industries for excellence in teaching, training, skill development and consultancy practices.
              </li>
              <li>To inculcate a strong value system, social concern and sensitivity to environmental issues as guiding principles while discharging professional and personal responsibilities.</li></p>

          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <MEStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <MEActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <MELab />
        )}
      </div>
    </div>
  );
};

export default ME;
