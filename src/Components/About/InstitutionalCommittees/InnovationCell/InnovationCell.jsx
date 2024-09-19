import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InnovationCell.css'; // Custom CSS file

const InnovationCell = () => {
  const [clubInfo, setClubInfo] = useState([]);

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
    <div className="innovation-cell-page">
      <div className="innovation-cell-content">
        <div className="innovation-cell-intro">
          <h2>Innovation Cell</h2>
          <p>
            Our Innovation Cell encourages creativity and innovative thinking among students. We support the development of new ideas and help students transform them into real-world solutions.
          </p>
        </div>
        <div className="innovation-cell-links">
          <h3>Important Links and Resources</h3>
          <table>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Resource Name</th>
                <th>Resource Link</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Innovation Policy</td>
                <td><a href="https://innovation.gov.in" target="_blank">View Here</a></td>
                <td><a href="https://example.com/innovation-policy-pdf" target="_blank">View PDF</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Startup Guidelines</td>
                <td><a href="https://startupindia.gov.in" target="_blank">View Here</a></td>
                <td><a href="https://example.com/startup-guidelines-pdf" target="_blank">View PDF</a></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="innovation-cell-incharge">
        {clubInfo
          .filter(club => club.clubName === "Innovation Cell")
          .map(club => (
            <div className="innovation-cell-incharge-details" key={club.clubIncharge}>
              <iframe
                src={getIframeLink(club.clubInchargeImageLink)}
                title={club.clubIncharge}
                className="innovation-cell-incharge-photo"
                frameBorder="0"
                width="150px"
                height="150px"
                allowFullScreen
              ></iframe>
              <div className="innovation-cell-incharge-info">
                <p className="incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="incharge-department">Department: {club.clubInchargeDepartment}</p>
                <p className="incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                <p className="incharge-email">Mail Id: {club.clubInchargeEmail}</p>
              </div>
            </div>
          ))
        }
      </div>


    </div>
  );
};

export default InnovationCell;
