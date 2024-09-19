import React, { useEffect, useState } from 'react';
import './DisciplineMonitoringCell.css';
import axios from 'axios';

const DisciplineMonitoringCell = () => {
  const [showModal, setShowModal] = useState(false);
  const [complaint, setComplaint] = useState({ name: '', email: '', description: '' });
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to submit complaint
      await axios.post('/api/discipline-complaints', complaint);
      alert('Complaint submitted successfully!');
      setShowModal(false);
      setComplaint({ name: '', email: '', description: '' });
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Failed to submit complaint. Please try again.');
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
    <div className="discipline-monitoring-container">
      <div className="discipline-monitoring-content">
        <h1 className="page-title">Discipline Monitoring Cell</h1>

        <section className="section">
          <h2 className="section-title">Introduction</h2>
          <p className="section-content">
            The Discipline Monitoring Cell is committed to maintaining discipline within the campus.
            It ensures that students adhere to the college rules and regulations, creating a conducive
            environment for learning and development.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Objectives</h2>
          <ul className="section-list">
            <li className="list-item">Ensure student discipline on the campus.</li>
            <li className="list-item">Address complaints and grievances related to discipline.</li>
            <li className="list-item">Promote a respectful and secure environment for all.</li>
          </ul>
        </section>

        <button className="submit-button" onClick={() => setShowModal(true)}>Submit Complaint</button>
      </div>

      <div className="incharge-section">
        {clubInfo
          .filter(club => club.clubName === "Discipline Monitoring Cell")
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

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="modal-title">Submit Your Complaint</h3>
            <form className="complaint-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={complaint.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={complaint.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="description">Complaint Description</label>
              <textarea
                id="description"
                name="description"
                value={complaint.description}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisciplineMonitoringCell;
