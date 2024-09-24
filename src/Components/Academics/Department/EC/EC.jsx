import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding ECS file
import ECStaff from './ECStaff';
import ECActivity from './ECActivity';
import ECLab from './ECLab';

const EC = () => {
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
            <p>The Electronics & Communication Engineering Department was started in the year 1994, diploma engineering program under DTE, Bangalore and approved by AICTE, New Delhi. The programs offered by the department are the most sought-after ones by Diploma Online Admission (conducted by Karnataka Examination Authority) top rank holders from across the state and country. Diploma programs is outcome based, structured to meet the needs of Industry and Research. The program contents are upgraded with the involvement of industry and reputed research institutions.

              A total of 4 permanent full time and 6 part-time experienced faculty members (all graduates and two of them with MTech), support four core specializations (Analog and Digital Circuits, wireless & wireline Communications, Image/Multimedia processing and Large Area and Flexible electronics) in the Department. Academics at diploma level is sustained with a staff to student ratio of 1:15 and well supported by licensed version/open source of basic software tools in over 15 computers. The curriculum includes a strong self-study component and mini projects at all levels so as to develop the students independent analytical abilities.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> Imparting quality technical education through interdisciplinary research, innovation and teamwork for technology development in the area of Electronics and Communication Engineering with inclusive & sustainable development.</p>
            <p><strong>Mission:</strong>
              <li>To impart quality technical education to produce industry ready engineers with a research outlook.
              </li>
              <li>To train the Electronics & Communication Engineering diploma graduates to meet global challenges by inculcating a quest for modern technologies in the emerging areas.
              </li>
              <li>To create centres of excellence in the field of electronics and communication engineering with industrial and university collaborations.
              </li>
            </p>
          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <ECStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <ECActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <ECLab />
        )}
      </div>
    </div>
  );
};

export default EC;
