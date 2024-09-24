import React, { useState } from 'react';
import LabDetails from './LabDetails';
import './../DepartmentHome.css'; // Ensure you have a corresponding CSS file
import CHStaff from './CHStaff';
import CHActivity from './CHActivity';

const CH = () => {
  const [activeSection, setActiveSection] = useState('vision-mission');

  return (
    <div className="ch-page">
      {/* Sidebar */}
      <div className="ch-sidebar">
        <ul>
          <li onClick={() => setActiveSection('vision-mission')}>Vision & Mission</li>
          <li onClick={() => setActiveSection('staff')}>Staff</li>
          <li onClick={() => setActiveSection('activities')}>Activities</li>
          <li onClick={() => setActiveSection('lab')}>Lab Details</li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="ch-content">
        {activeSection === 'vision-mission' && (
          <section className="ch-section">
            <h2 className="ch-heading">Introduction</h2>
            <p>Karnataka (Govt) Polytechnic was the first polytechnic to start three-year Diploma course in chemical engineering, in our state in year 1975, and it was only one polytechnic, which was offering Diploma in chemical Engg. up to 1984.  Right from the inception our department has unique distinction in teaching and learning process, quality education, academic activities, co-curricular and extra - curricular activities.   Very good Infrastructure facilities are   provided for imparting quality practical training, by inculcating skills among the students in handling and operation of equipment’s in the field of  heat transfer ,mass transfer, momentum transfer, mechanical operation and in Technical analysis. through well-established laboratories to cater present industrial needs. Good class rooms, experienced faculty members, creates good teaching learning atmosphere in the department, which leads to get 95- 100 % academic performance every year. This department provides needful exposure and training as per the present industrial requirements. Placements for Diploma Chemical Engg. Students will be more than 80%. The appropriate submission and presentation of the projects to the funding agencies like WORLD BANK/ MADROBS, we have been able to get funds for the development of infrastructure of our department.  As a part of internal revenue generation, Chemical Engg. Department also provides need-based training programmes for MCF, MRPL and SEZ employees.</p>
            <h2 className="ch-heading">Vision & Mission</h2>
            <p><strong>Vision:</strong> To produce competitive, responsive, globally competent chemical technologists to cater the needs of the industries.</p>
            <p><strong>Mission:</strong>
              <li>Integrate the self-sustainable education with basic teaching- learning process with need-based curriculum.</li>
              <li>Inculcate logical thinking, creativity and effective communication skills.</li>
              <li>Cultivate awareness of emerging trends in chemical engineering field through self-learning.</li>
              <li>To motivate lifelong learning and creating good resources.</li></p>
            <h2 className="ch-heading">Goals</h2>
            <p>To inculcate professional skills, ethics, social concerns and to provide value added, sustainable technical education in the field of chemical Engg. to cater present need of the industries.</p>
          </section>
        )}

        {activeSection === 'staff' && (
          <section className="ch-section">
            <h2 className="ch-heading">Staff Details</h2>
            <CHStaff />
          </section>
        )}

        {activeSection === 'activities' && (
          <section className="ch-section">
            <CHActivity />
          </section>
        )}

        {activeSection === 'lab' && (
          <LabDetails />
        )}
      </div>
    </div>
  );
};

export default CH;
