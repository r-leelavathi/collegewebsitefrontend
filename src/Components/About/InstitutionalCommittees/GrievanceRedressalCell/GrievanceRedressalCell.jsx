import React, { useEffect, useState } from 'react';
import './GrievanceRedressalCell.css'; // Import the CSS file
import axios from 'axios';

const GrievanceRedressalCell = () => {
  const [clubInfo, setClubInfo] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/club_details')
      .then(response => {
        setClubInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching club info:', error);
      });
  }, []);

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
    <div className="grievanceredressal-container">
      <div className="grievanceredressal-content">

        <section className="grievanceredressal-section introduction">
          <h2 className="grievanceredressal-page-title">Grievance Redressal Cell</h2>
          <p className="grievanceredressal-section-content">
            The Grievance Redressal Cell is established to address concerns and complaints from students, staff, and parents. Our aim is to maintain a positive and supportive educational environment by providing a platform for grievances to be heard and resolved efficiently.
          </p>
        </section>

        <section className="grievanceredressal-section objectives">
          <h2 className="grievanceredressal-section-title">Objectives</h2>
          <ul className="grievanceredressal-section-list">
            <li className="grievanceredressal-list-item">Resolve complaints in a timely and efficient manner.</li>
            <li className="grievanceredressal-list-item">Promote transparency and accountability in the redressal process.</li>
            <li className="grievanceredressal-list-item">Ensure a fair and impartial approach to all grievances.</li>
          </ul>
        </section>

        <section className="grievanceredressal-section submission-process">
          <h2 className="grievanceredressal-section-title">Grievance Submission Process</h2>
          <p className="grievanceredressal-section-content">
            Grievances can be submitted through the following methods:
          </p>
          <ul className="grievanceredressal-section-list">
            <li className="grievanceredressal-list-item">Email: Send your grievance to <a href="mailto:kptmng@gmail.com" className="grievanceredressal-link">kptmng@gmail.com</a>.</li>
            <li className="grievanceredressal-list-item">In-Person: Visit the Grievance Redressal Cell office located in the administration block.</li>
          </ul>
        </section>
      </div>

      <div className="grievanceredressal-incharge-section">
        {clubInfo
          .filter(club => club.clubName === "Grievence Redressal Cell")
          .map(club => (
            <div className="grievanceredressal-incharge-info" key={club.clubIncharge}>
              <iframe
                src={getIframeLink(club.clubInchargeImageLink)}
                title={club.clubIncharge}
                className="grievanceredressal-incharge-photo"
                frameBorder="0"
                width="100px"
                height="100px"
                allowFullScreen
              ></iframe>
              <div className="grievanceredressal-club-incharge-details">
                <p className="grievanceredressal-incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="grievanceredressal-incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="grievanceredressal-incharge-department">Department: {club.clubInchargeDepartment}</p>
                <p className="grievanceredressal-incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                <p className="grievanceredressal-incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                <a
                  href={club.collegeOrderCopyImageLink}
                  className="grievanceredressal-members-list-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Committee Members List
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default GrievanceRedressalCell;
