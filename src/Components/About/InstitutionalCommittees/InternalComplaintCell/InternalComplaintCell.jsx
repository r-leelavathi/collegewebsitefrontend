import React, { useEffect, useState } from 'react';
import './InternalComplaintCell.css'; // Import the CSS file
import axios from 'axios';

const InternalComplaintCell = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


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


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send form data via email
    await fetch('https://your-backend-endpoint/send-email', { // Replace with your backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Close the modal and reset the form
    closeModal();
    event.target.reset();
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
    <div className="internal-complaint-container">
      <div className="internal-complaint-content">

        <section className="section introduction">
          <h2 className="section-title">Internal Complaint Cell</h2>
          <p className="section-content">
            The Internal Complaint Cell is dedicated to addressing and resolving complaints and concerns raised by employees and other internal stakeholders. Our goal is to foster a transparent and supportive work environment.
          </p>
        </section>

        <section className="section objectives">
          <h2 className="section-title">Objectives</h2>
          <ul className="section-list">
            <li className="list-item">Ensure timely resolution of internal complaints.</li>
            <li className="list-item">Promote a culture of transparency and fairness.</li>
            <li className="list-item">Provide a structured process for complaint resolution.</li>
          </ul>
        </section>

        <section className="section submission-process">
          <h2 className="section-title">Complaint Submission Process</h2>
          <p className="section-content">
            Complaints can be submitted via the following methods:
          </p>
          <ul className="section-list">
            <li className="list-item">Online Form: <a href="#" className="link" onClick={openModal}>Click here to submit</a></li>
            <li className="list-item">Email: Send your complaint to <a href="mailto:complaints@company.com" className="link">kptmng@gmail.com</a>.</li>
            <li className="list-item">In-Person: Visit the Internal Complaint Cell office located in the HR department.</li>
          </ul>
        </section>
      </div>

      <div className="incharge-section">
        {clubInfo
          .filter(club => club.clubName === "Internal Complaint Committee")
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">Submit Your Complaint</h2>
            <form onSubmit={handleSubmit} className="complaint-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="complaint">Complaint:</label>
              <textarea id="complaint" name="complaint" required></textarea>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternalComplaintCell;
