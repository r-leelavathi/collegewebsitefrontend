import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding CSS file
import CSStaff from './CSStaff';
import CSActivity from './CSActivity';
import CSLab from './CSLab';

const CS = () => {
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
            <p>The Computer Science and Engineering (CSE) program was started in the year 2001. The main focus of the department is to educate students in Computer Science and Engineering domain. The course is an outcome based structured to help students to achieve this goal. The course is approved by All India Council for Technical Education (AICTE). Top rank holders from 10th Standard/SSLC and other aspirants prefers this program.Faculties in the department have outstanding teaching experience. The department has excellent infrastructure with state-of-the-art equipment and software tools. It is having computer centre with over 90+ computers catering to student needs.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> To achieve leadership in the field of Computer Science & Engineering by strengthening fundamentals and facilitating interdisciplinary sustainable research to meet the ever-growing needs of the society.</p>
            <p><strong>Mission:</strong>
              <li>To evolve continually as a centre of excellence in quality education in Computers and allied fields.
              </li>
              <li>To develop state of the art infrastructure and create environment capable for interdisciplinary research and skill enhancement.
              </li>
              <li>To collaborate with industries and institutions at national and international levels to enhance research in emerging areas.
              </li>
              <li>To develop professionals with ethical and societal values.</li></p>

          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <CSStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <CSActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <CSLab />
        )}
      </div>
    </div>
  );
};

export default CS;
