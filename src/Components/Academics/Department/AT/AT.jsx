import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding ATS file
import ATStaff from './ATStaff';
import ATActivity from './ATActivity';
import ATLab from './ATLab';

const AT = () => {
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
            <p>Department of Automobile Engineering is a branch of Mechanical Engineering offers 3 years Diploma in Automobile Engineering. The Department was started in 1946 with an intake of 60 students. This course caters to train the students to design, develop, manufacture, and repair of automobiles. The demand for automobile engineering is growing with the expansion of automobile industries and increasing demand of industrial requirements. The Department strives to impart quality education keeping in view the global scenario. The Department of Automobile Engineering of this Institution has been trying its best to prepare Diploma holders in Automobile Engineering to meet the needs of the current industrial requirements. The department has experienced faculty which aims to provide qualitative education to the students. The Curriculum adopted is prescribed by Department of Technical Education. High importance is given to the classroom learning which is meant primarily for the theoretical or conceptual inputs of knowledge. Besides imparting theoretical knowledge, lot of stress is laid on providing practical knowledge also. Automobile Engineering has wide employment opportunities which includes Automobile manufacturing Industry, in maintenance and service station, private transport company and so on. Self-employment is also possible in setting up of automobile garages or maintenance workshop.</p>
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
            <ATStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <ATActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <ATLab />
        )}
      </div>
    </div>
  );
};

export default AT;
