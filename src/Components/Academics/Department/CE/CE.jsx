import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding CES file
import CEStaff from './CEStaff';
import CEActivity from './CEActivity';
import CELab from './CELab';

const CE = () => {
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
            <p>Karnataka (Govt) Polytechnic is one of the premium govt polytechnic which started in the year 1946 at Kadri hills, Mangalore.

              Our 1st batch of Civil Engineering Branch admission started in the year 1946. At the beginning the course was named under vocational training as LCE, later it was redefined as Diploma in Civil Engineering. Presently an intake of 63 students for the first-year course. It has been designed for three years under semester scheme of study; each year composed of two semesters to a total of six semesters of study. Now the courses are redesigned in the work of Outcome Based Education (OBE) to the need of the current Civil Engineering field requirement. The approach towards the study is to fulfil the current requirements in the civil engineering profession.

              The department is well equipped with all the facilities needed to train the students both theoretically and practically. Under the department, civil consultancy centre was started in the year 1994 under Continuing Education CELL(CIICT), Later monitored by CCTEK. Now it has been monitored independently by Civil Consultancy Centre of the institute. Under this quality control check related to the constructional material and other civil engineering related works will be done for both government departments (Central and State) and private consultancy agencies.

              The department is headed by HOD and with five faculty members and two supporting staffs. It is very well managed and our students are able to address the requirements in the field as per the current need of the society.</p>
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
            <CEStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <CEActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <CELab />
        )}
      </div>
    </div>
  );
};

export default CE;
