import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding EEES file
import EEEStaff from './EEEStaff';
import EEEActivity from './EEEActivity';
import EEELab from './EEELab';

const EEE = () => {
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
            <p>The Department of Electrical and Electronics, is one of the oldest Departments at Karnataka (Govt.) polytechnic, Mangalore. Established in the year 1945, the department has well qualified; passionate and dedicated staff. With a current annual intake of 63 students from all parts of Karnataka, the staff to student ratio now stands at a plausible 1:7.

              The Course at the department, is a healthy amalgam of Power Engineering, Electronics and Computers; comprehensive and in keeping modern trends of Electrical and Electronics Engineering education. Course pattern at the department is planned to keep the students up to date with the recent trends and shifting technological paradigms, making them industry ready. The average experience of the faculty is very high.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> To develop a programme with excellence in teaching, and learning to produce globally competitive Electrical & Electronics Engineers with social responsibilities.

            </p>
            <p><strong>Mission:</strong>
              The mission of the Electrical & Electronics Engineering Program is to benefit the society at large by
              <li>Imparting quality technical education to students providing excellent teaching learning environment and through competitive curriculum in collaboration with industry.
              </li>
              <li>The technicians should be able to apply basic and contemporary science, engineering and innovative skills to identify problems in the industry and academia and be able to develop practical solutions to them.
              </li>
              <li>To provide experiences in leadership, team-work, communications and hands-on activities with the help of structured and unstructured real-life projects.
              </li>
              <li>To encourage ethical values and leadership abilities in the minds of students so as to work towards the growth of the society.
              </li></p>

            <h2 className="ch-heading">Departmental Library</h2>
            We have more than 300 reference books and "Electronics for you" monthly magazine.
          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <EEEStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <EEEActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <EEELab />
        )}
      </div>
    </div>
  );
};

export default EEE;
