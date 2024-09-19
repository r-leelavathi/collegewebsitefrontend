import React, { useEffect, useState } from 'react';
import './IQAC.css';
import axios from 'axios';

const IQAC = () => {

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
    <div className="iqac-container">
      <div className="iqac-content">
        {/* Introduction Section */}
        <section className="section">
          <h2 className="section-title">Internal Quality Assurance Cell (IQAC)</h2>
          <p className="section-content">
            The IQAC is dedicated to fostering a system that ensures consistent and significant improvement in the institution's overall performance. By focusing on conscious, continuous efforts, the IQAC drives enhancements across all aspects of the institution's operations and educational practices.
          </p>
        </section>

        {/* Vision and Mission Section */}
        <section className="section">
          <h2 className="section-title">Vision and Mission</h2>
          <p className="section-content">
            Vision: To promote quality culture as the prime concern through institutionalizing and internalizing all the initiatives taken with internal and external support.
          </p>
          <p className="section-content">
            Mission: To channelize the efforts and measures of an institution towards academic excellence.
          </p>
        </section>

        {/* Objectives Section */}
        <section className="section">
          <h2 className="section-title">Objectives</h2>
          <ul className="section-list">
            <li className="list-item">Enhance Academic Quality: Implement and promote best practices in teaching, research, and administration to elevate the academic standards and overall quality of education.

            </li>
            <li className="list-item">Foster Continuous Improvement: Establish ongoing mechanisms for the assessment and enhancement of teaching and learning processes, ensuring they remain effective and responsive to changing educational needs and standards.</li>
          </ul>
        </section>

        {/* Functions Section */}
        <section className="section">
          <h2 className="section-title">Functions of IQAC</h2>
          <p>

            The Internal Quality Assurance Cell (IQAC) serves as a pivotal quality monitoring body within the institution. It is responsible for fostering a culture of continuous improvement by:</p>
          <ul className="section-list">
            <li className="list-item">
              Facilitating Faculty Development Programs: Organizing and supporting professional development opportunities for faculty to enhance their teaching skills, research capabilities, and overall academic performance.
            </li><li className="list-item">
              Conducting Student Workshops: Coordinating workshops and training sessions aimed at enriching students' academic and professional skills, preparing them for future challenges.
            </li><li className="list-item">
              Implementing Best Practices: Identifying, promoting, and integrating best practices in various academic and administrative processes to ensure the highest standards of quality and effectiveness.
            </li><li className="list-item">
              Monitoring Quality Standards: Regularly assessing and reviewing institutional processes to ensure compliance with quality standards and recommending improvements where necessary.
            </li><li className="list-item">
              Conducting Internal Assessments: Managing and conducting internal assessments and evaluations to monitor academic performance and ensure that institutional goals are being met efficiently.</li>
          </ul>
        </section>

        {/* Reports Section */}
        <section className="section">
          <h2 className="section-title">Reports and Documentation</h2>
          <a href="/assets/documents/IQAC_committee.pdf" className="link" target="_blank" rel="noopener noreferrer">
            Download Annual Quality Assurance Report (AQAR)
          </a>

        </section>

      </div>

      <div className="incharge-section">
        {clubInfo
          .filter(club => club.clubName === "IQAC")
          .map(club => (
            <div className="incharge-info" key={club.clubIncharge}>
              <iframe
                src={getIframeLink(club.clubInchargeImageLink)}
                title={club.clubIncharge}
                className="incharge-photo"
                frameBorder="0"
                width="100px"
                height="100px"
                allowFullScreen
              ></iframe>
              <div className="club-incharge-details">
                <p className="incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="incharge-designation">Department: {club.clubInchargeDepartment}</p>
                <p className="incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                <p className="incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                <a
                  href={club.collegeOrderCopyImageLink}
                  className="members-list-link"
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

export default IQAC;
