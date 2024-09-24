import React, { useState } from 'react';
import './../DepartmentHome.css'; // Ensure you have a corresponding POS file
import POStaff from './POStaff';
import POActivity from './POActivity';
import POLab from './POLab';

const PO = () => {
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
            <p>Karnataka (Govt) Polytechnic was the first polytechnic to start three-year Diploma course in Polymer engineering, in our state in year 1975, and it is only one polytechnic, which is still offering Diploma in Polymer Engg.  Right from the inception our department has unique distinction in teaching and learning process, quality education, academic activities, co-curricular and extra - curricular activities.   Very good Infrastructure facilities are   provided for imparting quality practical training, by inculcating skills among the students in handling and operation of equipment’s in the field of Polymer processing lab both for Rubber and Plastic, mechanical operation Chemical testing, analysis. through well-established laboratories to cater present industrial needs. Good class rooms, experienced faculty members, creates good teaching learning atmosphere in the department, which leads to get 95- 100 % academic performance every year. This department provides needful exposure and training as per the present industrial requirements. Placements for Diploma Polymer Engg. Students will be more than 80%. The intake is 42 students every year.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> To produce globally competent polymer technologist with sound technical knowledge and expertise to meet the needs of the society.

            </p>
            <p><strong>Mission:</strong>
              <li>To offer quality education and training in Polymer Technology through well-structure curriculum to impart knowledge and skill in the field of Polymer technology through well designed programmes.

              </li>
              <li>To equip the students with recent trends in the development of polymers and polymer products using appropriate techniques and software.

              </li>
              <li>To promote engineering spirit for the product development through effective integration design engineering and material technology.

              </li>
              <li>To develop analytical skills, leadership quality and team sprit through balanced curriculum and a judicial mix of co-curricular, extra-curricular and professional society activities.
              </li></p>

          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <POStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <POActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <POLab />
        )}
      </div>
    </div>
  );
};

export default PO;
