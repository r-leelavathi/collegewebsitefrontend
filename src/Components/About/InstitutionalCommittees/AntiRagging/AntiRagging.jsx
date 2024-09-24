import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AntiRagging.css'; // Import the CSS file

const AntiRagging = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send form data via email using Axios
      await axios.post('https://your-backend-endpoint/send-email', data); // Replace with your backend endpoint
      alert('Complaint submitted successfully!');
    } catch (error) {
      alert('Error submitting complaint. Please try again.');
    }

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
    <div className="anti-ragging-container">
      <div className="anti-ragging-content">

        <section className="section introduction">
          <h2 className="section-title">Anti-Ragging Cell</h2>
          <p className="section-content">
            The Anti-Ragging Cell is committed to creating a safe and supportive environment free from any form of senior students ragging. Our goal is to prevent incidents of ragging and address complaints promptly and effectively.
          </p>
        </section>

        <section className="section objectives">
          <h2 className="section-title">Objectives</h2>
          <ul className="section-list">
            <li className="list-item">Prevent ragging and ensure a safe educational environment.</li>
            <li className="list-item">Address complaints in a timely and effective manner.</li>
            <li className="list-item">Promote awareness about the consequences of ragging.</li>
          </ul>
        </section>

        <section className="section reporting-mechanism">
          <h2 className="section-title">Reporting Mechanism</h2>
          <p className="section-content">
            If you experience or witness any incident of ragging, you can report it via the following methods:
          </p>
          <ul className="section-list">
            <li className="list-item">Online Form: <a href="#" className="link" onClick={openModal}>Click here to report</a></li>
            <li className="list-item">Email: Send your complaint to <a href="mailto:kptmng@gmail.com" className="link">kptmng@gmail.com</a>.</li>
            <li className="list-item">In-Person: Visit the Anti-Ragging Cell office located in the Administration block.</li>
          </ul>
        </section>
      </div>

      <div className="incharge-section">
        {clubInfo
          .filter(club => club.clubName === "Anti Ragging Committee")
          .map(club => (
            <div className="incharge-info" key={club.clubIncharge}>
              <iframe
                src={getIframeLink(club.clubInchargeImageLink)}
                title={club.clubIncharge}
                className="incharge-photo"
                frameBorder="0"
                width="400px"
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

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">Report an Incident</h2>
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

export default AntiRagging;
