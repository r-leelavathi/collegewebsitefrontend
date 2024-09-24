import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding SCS file
import SCStaff from './SCStaff';
import SCActivity from './SCActivity';
import SCLab from './SCLab';

const SC = () => {
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
            <p>This department imparts education in Engineering mathematics, Applied science both in theory and experiments. The dept is located in the administrative block of Karnataka (Govt) Polytechnic Mangalore in the ground floor.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong>
              <li>To enable students to understand, appreciate the role of physics and mathematics in inter disciplinary engineering applications.
              </li>
              <li>Constant efforts for the betterment of students community
              </li>
            </p>
            <p><strong>Mission:</strong>
              <li>Imparting education with knowledge sharing, experimental skills, assignments, project work and experimental learnig.
              </li>
              <li>Application of physics in solving engineering problems.
              </li>
              <li>Imparting quality education in the areas of various domains of mathematics.
              </li>
              <li>Preparing students to pursue higher education like B.E through CET.
              </li></p>

          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <SCStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <SCActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <SCLab />
        )}
      </div>
    </div>
  );
};

export default SC;
