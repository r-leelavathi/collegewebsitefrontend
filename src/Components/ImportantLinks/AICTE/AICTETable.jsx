import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AICTETable.css';

const AICTETable = () => {
  const [aicteFiles, setAicteFiles] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);

  useEffect(() => {
    // Fetch AICTE data
    axios.get('http://localhost:8080/api/aicte/all')
      .then(response => {
        setAicteFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching AICTE data:', error);
      });

    // Fetch club info data
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
    <div className="container">
      <div className="intro-section">
        <div className="aicte-intro">
          <h2 className="aicte-heading">AICTE Files</h2>
          <p className="aicte-description">
            The All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education, under the Department of Higher Education, Ministry of Human Resource Development. It gives approvals for every program in every year. The Extension of Approval (EOA) letters are listed here.
          </p>
        </div>
        <div className="club-info">
          {clubInfo
            .filter(club => club.clubName === "AICTE")
            .map(club => (
              <div className="club-incharge" key={club.clubIncharge}>
                <iframe
                  src={getIframeLink(club.clubInchargeImageLink)}
                  title={club.clubIncharge}
                  className="club-incharge-photo"
                  frameBorder="0"
                  width="100px"
                  height="100px"
                  allowFullScreen
                ></iframe>
                <div className="club-incharge-details">
                  <p className="club-incharge-name">Incharge: {club.clubIncharge}</p>
                  <p className="club-incharge-designation">Designation: {club.clubInchargeDesigntion}</p>
                  <p className="club-incharge-designation">Department: {club.clubInchargeDepartment}</p>
                  <p className="club-incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                  <p className="club-incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Display AICTE table */}
      <table className="aicte-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Year</th>
            <th>Extension of Approval</th>
          </tr>
        </thead>
        <tbody>
          {aicteFiles.map((file, index) => (
            <tr key={file.slno}>
              <td>{index + 1}</td>
              <td>{file.year}</td>
              <td><a href={file.link} target="_blank" rel="noopener noreferrer">View Document</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AICTETable;
