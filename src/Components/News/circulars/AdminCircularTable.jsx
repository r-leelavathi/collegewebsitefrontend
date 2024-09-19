import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './../ClubTable.css'; // Ensure you import the new CSS file

const StudentCouncil = () => {
  const [officers, setOfficers] = useState([]);
  const [coordinators, setCoordinators] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchOfficers();
    fetchCoordinators();
    fetchActivities();
  }, []);

  const fetchOfficers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student-welfare-officers');
      setOfficers(response.data);
    } catch (error) {
      console.error('Error fetching officers:', error);
    }
  };

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student-welfare-coordinators');
      setCoordinators(response.data);
    } catch (error) {
      console.error('Error fetching coordinators:', error);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student-council-activities');
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const extractDriveId = (link) => {
    const match = link ? link.match(/\/d\/(.*?)\//) : null;
    return match ? match[1] : null;
  };

  return (
    <div className="club_app-container">
      <div className="club_info-section">
        <h2 className="club_club-name">Student Council</h2>
        <p className="club_description">
          The Student Council at our college serves as the representative body for students, working to create a bridge between the administration and the student community. Our goal is to provide a platform for student voices, facilitate positive change, and promote academic, social, and extracurricular well-being for every student.
        </p>
        <div className="club_vision-mission">
          <h3 className="club_vision-title">Vision</h3>
          <p className="club_vision-description">
            To empower students to develop leadership, responsibility, and community engagement through collaborative efforts that promote the holistic development of individuals and the enhancement of the student experience.
          </p>
          <h3 className="club_mission-title">Mission</h3>
          <p className="club_mission-description">
            To foster a dynamic and inclusive environment where students can actively participate in shaping their academic journey, engage in meaningful extracurricular activities, and contribute to the welfare of the institution and the wider community.
          </p>
        </div>
      </div>
      {officers.map((officer) => {
        const imageId = extractDriveId(officer.studentWelfareOfficerImage);
        const imageSrc = imageId ? `https://drive.google.com/uc?export=view&id=${imageId}` : '';

        return (
          <div key={officer.studentWelfareOfficerId} className="club_wrapper">

            <div className="club_incharge-section">
              <div className="club_incharge-info">
                {imageSrc && (
                  <iframe
                    src={imageSrc}
                    title={officer.studentWelfareOfficerName}
                    className="club_incharge-photo"
                    frameBorder="0"
                    style={{ width: '200px', height: '200px', border: 'none' }}
                  />
                )}
                <p className="club_incharge-name">Incharge: {officer.studentWelfareOfficerName}</p>
                <p className="club_incharge-department">Department: {officer.studentWelfareOfficerDepartment}</p>
                <p className="club_incharge-designation">Designation: {officer.studentWelfareOfficerDesignation}</p>
                <p className="club_incharge-phone">Phone Number: {officer.studentWelfareOfficerContactNumber}</p>
                <p className="club_incharge-email">Mail Id: {officer.studentWelfareOfficerMailId}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="club_events-intro">
        Below is a list of activities conducted by the Student Council...
      </div>
      <div className="club_table-container">
        <table className="club_table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Description</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((event) => (
              <tr key={event.id}>
                <td>{event.topic}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td><a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">View Link</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCouncil;
