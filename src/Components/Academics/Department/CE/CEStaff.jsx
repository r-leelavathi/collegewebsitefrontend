import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../Faculty/FacultyTable.css'

const CEStaff = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/faculties')
      .then(response => {
        const chemicalFaculty = response.data.filter(faculty => faculty.facultyDepartment === 'Civil Engineering');
        setFacultyData(chemicalFaculty);
      })
      .catch(error => {
        console.error('Error fetching faculty data:', error);
      });
  }, []);

  const convertDriveLink = (driveLink) => {
    if (typeof driveLink === 'string') {
      const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return driveLink;
  };

  return (
    <div className="faculty-list-container">
      <div className="faculty-list">
        {facultyData.map(faculty => (
          <div className="faculty-card" key={faculty.facultyId}>
            {faculty.facultyLink && (
              <iframe
                src={convertDriveLink(faculty.facultyLink)}
                title={`${faculty.facultyName}'s Image`}
                className="faculty-image"
                frameBorder="0" allowFullScreen
              ></iframe>
            )}
            <h3 className="faculty-name">{faculty.facultyName}</h3>
            <p><b>Designation:</b> {faculty.facultyDesignation}</p>
            <p><b>Department:</b> {faculty.facultyDepartment}</p>
            <p><b>Email:</b> {faculty.facultyEmail}</p>
            <a href={faculty.facultyLink} target="_blank" rel="noopener noreferrer" className="faculty_view_profile">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CEStaff
