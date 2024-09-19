import React from 'react';
import './OrganizationStructure.css';

const OrganizationStructure = () => {
  return (
    <>
      <div className="organization-structure-container">
        <h2>Organisation Structure</h2>
        <p>Karnataka (Govt.) Polytechnic, Mangalore, located in the heart of Dakshina Kannada, Karnataka, is structured to provide a supportive and effective learning environment for students pursuing diploma courses. At the helm is the Principal, who leads the institution with a focus on academic excellence and administrative efficiency. Supporting the Principal is the Administrative Team, which includes key roles such as the Vice Principal, Heads of Departments (HODs), and the Registrar, ensuring smooth operations across various departments like Mechanical, Civil, Electronics, and Computer Science.

          <br /><br />
          Each department is led by experienced faculty members who are responsible for delivering quality education and guiding students in their academic and professional development. The cohesive structure fosters a collaborative environment where staff and students work together to achieve academic success and personal growth.

        </p>
      </div>
      <div className="organization-structure-container">
        <img src="/assets/flowcharts/organisationStructure.jpg" alt="organisationStructure" />
      </div>
    </>
  );
};

export default OrganizationStructure;
