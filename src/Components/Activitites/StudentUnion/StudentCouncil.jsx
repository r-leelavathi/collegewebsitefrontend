import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentCouncil.css'; // Ensure you import the new CSS file

const StudentCouncil = () => {
  const [coordinator, setCoordinator] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);

  useEffect(() => {
    fetchcoordinators();
    fetchClubInfo();
  }, []);

  const fetchClubInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      setClubInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching club info:', error);
    }
  };

  const fetchcoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student-welfare-coordinators');
      setCoordinator(response.data);
    } catch (error) {
      console.error('Error fetching coordinator:', error);
    }
  };

  const getIframeLink = (googleDriveLink) => {
    if (typeof googleDriveLink === 'string') {
      const fileIdMatch = googleDriveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return googleDriveLink;
  };

  return (
    <div className="studentCouncil-container">
      <div className="studentCouncil-info-and-incharge">
        {/* Left Side - Intro, Vision, Mission */}
        <div className="studentCouncil-info-section">
          <h2 className="studentCouncil-club-name">Student Council</h2>
          <p className="studentCouncil-description">
            The Student Council at our college serves as the representative body for students, working to create a bridge between the administration and the student community. Our goal is to provide a platform for student voices, facilitate positive change, and promote academic, social, and extracurricular well-being for every student.
          </p>
          <div className="studentCouncil-vision-mission">
            <h3 className="studentCouncil-vision-title">Vision</h3>
            <p className="studentCouncil-vision-description">
              To empower students to develop leadership, responsibility, and community engagement through collaborative efforts that promote the holistic development of individuals and the enhancement of the student experience.
            </p>
            <h3 className="studentCouncil-mission-title">Mission</h3>
            <p className="studentCouncil-mission-description">
              To foster a dynamic and inclusive environment where students can actively participate in shaping their academic journey, engage in meaningful extracurricular activities, and contribute to the welfare of the institution and the wider community.
            </p>
          </div>
        </div>

        {/* Right Side - Officers */}
        <div className="studentCouncil-incharge-details">
          {clubInfo
            .filter((club) => club.clubName === "Student Council Officer 1" || club.clubName === "Student Council Officer 2")
            .map((club) => (
              <div className="studentCouncil-incharge-section" key={club.clubIncharge}>
                <div className="studentCouncil-incharge-photo-container">
                  <iframe
                    src={getIframeLink(club.clubInchargeImageLink)}
                    title={club.clubIncharge}
                    className="studentCouncil-incharge-photo"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="studentCouncil-incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="studentCouncil-incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="studentCouncil-incharge-designation">Department: {club.clubInchargeDepartment}</p>
                <p className="studentCouncil-incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                <p className="studentCouncil-incharge-email">Mail Id: {club.clubInchargeEmail}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="studentCouncil-events-intro">
        The table below provides a comprehensive list of coordinators who play an essential role in the Student Council. These student coordinators are actively involved in various council activities and initiatives, contributing to the vibrant and dynamic environment of the Student Council at Karnataka (Govt.) Polytechnic, Mangalore. Their involvement is crucial in organizing events, leading projects, and ensuring effective communication between students and the administration.
      </div>


      <div className="studentCouncil-table-container">
        <table className="studentCouncil-table">
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {coordinator.map((event) => (
              <tr key={event.id}>
                <td>{event.studentWelfareCoordinatorId}</td>
                <td>{event.studentWelfareCoordinatorName}</td>
                <td>{event.studentWelfareCoordinatorBranch}</td>
                <td>{event.studentWelfareCoordinatorYear}</td>
                <td>{event.studentWelfareCoordinatorRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCouncil;
