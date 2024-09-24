import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ScholarshipsFinancialAid.css';

const ScholarshipsFinancialAid = () => {
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
    <div className="scholarship-page">
      <div className="scholarship-content">
        <div className="scholarship-intro">
          <h2>Scholarship Financial Aid</h2>
          <p>
            At our institution, we are deeply committed to supporting students in reaching their academic potential, regardless of financial circumstances. To ease the burden of educational expenses, we offer a wide range of scholarships and financial aid programs aimed at helping students from diverse backgrounds. These scholarships cater to merit-based, need-based, and specialized criteria, ensuring that every student has the opportunity to pursue their education with minimal financial strain. Whether you are excelling in academics, active in extracurricular activities, or facing financial challenges, there is a scholarship designed to suit your needs.
          </p>
        </div>
        <div className="scholarship-incharge">
          {clubInfo
            .filter(club => club.clubName === "Scholarship")
            .map(club => (
              <div className="scholarship-incharge-details" key={club.clubIncharge}>
                <iframe
                  src={getIframeLink(club.clubInchargeImageLink)}
                  title={club.clubIncharge}
                  className="scholarship-incharge-photo"
                  frameBorder="0"
                  width="150px"
                  height="150px"
                  allowFullScreen
                ></iframe>
                <div className="scholarship-incharge-info">
                  <p className="incharge-name">Incharge: {club.clubIncharge}</p>
                  <p className="scholarship-incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                  <p className="scholarship-incharge-designation">Department: {club.clubInchargeDepartment}</p>
                  <p className="scholarship-incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                  <p className="scholarship-incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="scholarship-links">
        <h3>Important Links to Apply for Scholarships</h3>
        <table>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Scholarship Name</th>
              <th>Application Link</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><b>National Scholarship</b></td>
              {/* <td><a href="https://scholarships.gov.in/" target="_blank">Apply Here</a></td> */}
              {/* <td><a href="https://example.com/national-scholarship-pdf" target="_blank">View</a></td> */}

            </tr>
            <tr>
              <td>1</td>
              <td>AICTE - PRAGATI (Scholarship for Girl Students)</td>
              <td><a href="https://scholarships.gov.in/ApplicationForm/#/login" target="_blank">Apply Here</a></td>
              <td><a href="https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2011_G.pdf" target="_blank">View</a></td>

            </tr>
            <tr>
              <td>2</td>
              <td>AICTE – Saksham Scholarship Scheme For Specially-Abled Student (Degree)</td>
              <td><a href="https://scholarships.gov.in/ApplicationForm/#/login" target="_blank">Apply Here</a></td>
              <td><a href="https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2013_G.pdf" target="_blank">View</a></td>

            </tr>
            <tr>
              <td></td>
              <td><b>State Scholarship</b></td>
              {/* <td><a href="https://scholarships.gov.in/" target="_blank">Apply Here</a></td> */}
              <td><a href="https://ssp.postmatric.karnataka.gov.in/Downloads2122.aspx" target="_blank">Files for Reference</a></td>
            </tr>
            <tr>
              <td>1</td>
              <td>OBC</td>
              <td><a href="https://ssp.postmatric.karnataka.gov.in/homepage.aspx" target="_blank">Apply Here</a></td>
              <td><a href="https://bcwd.karnataka.gov.in" target="_blank">View</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>SC/ST</td> <td><a href="https://ssp.postmatric.karnataka.gov.in/homepage.aspx" target="_blank">Apply Here</a></td>
              <td><a href="https://swdservices.karnataka.gov.in/" target="_blank">View</a></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScholarshipsFinancialAid;
