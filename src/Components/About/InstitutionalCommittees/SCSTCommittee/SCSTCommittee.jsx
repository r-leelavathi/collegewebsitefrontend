import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SCSTCommittee.css'; // Custom CSS file

const SCSTCommittee = () => {
  const [clubInfo, setClubInfo] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
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
    closeModal();
    event.target.reset();
  };

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
    <div className="scst-committee-container">
      <div className="scst-committee-content">

        {/* Introduction Section */}
        <section className="scst-section scst-introduction">
          <h2 className="scst-section-title">SC/ST Welfare Committee</h2>
          <p className="scst-section-content">
            The SC/ST Welfare Committee ensures the proper implementation of various schemes and programs designed for the welfare of SC/ST students. The committee addresses issues faced by these students and provides the necessary support for their educational and personal development.
          </p>
        </section>

        {/* Objectives Section */}
        <section className="scst-section scst-objectives">
          <h2 className="scst-section-title">Objectives</h2>
          <ul className="scst-section-list">
            <li className="scst-list-item">Ensure equal opportunities for SC/ST students in all areas.</li>
            <li className="scst-list-item">Address the grievances of SC/ST students.</li>
            <li className="scst-list-item">Promote awareness of SC/ST welfare schemes.</li>
          </ul>
        </section>

        {/* Reporting Mechanism */}
        <section className="scst-section scst-reporting-mechanism">
          <h2 className="scst-section-title">Grievance Reporting Mechanism</h2>
          <p className="scst-section-content">
            Students facing any issues or discrimination can report through the following channels:
          </p>
          <ul className="scst-section-list">
            <li className="scst-list-item">Online Form: <a href="#" className="link" onClick={openModal}>Submit a Grievance</a></li>
            <li className="scst-list-item">Email: <a href="mailto:scstsupport@college.edu" className="scst-link">kptmng@gmail.com</a></li>
            <li className="scst-list-item">In-Person: Visit the SC/ST Welfare Committee Office.</li>
          </ul>
        </section>

      </div>

      {/* Incharge Section */}
      <div className="scst-incharge-section">
        {clubInfo
          .filter(club => club.clubName === "SC/ST Committee")
          .map(club => (
            <div className="scst-incharge-info" key={club.clubIncharge}>
              <iframe
                src={getIframeLink(club.clubInchargeImageLink)}
                title={club.clubIncharge}
                className="scst-incharge-photo"
                frameBorder="0"
                width="300px"
                height="300px"
                allowFullScreen
              ></iframe>
              <div className="scst-club-incharge-details">
                <p className="scst-incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="scst-incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="scst-incharge-department">Department: {club.clubInchargeDepartment}</p>
                <p className="scst-incharge-phone">Phone: {club.clubInchargePhoneNumer}</p>
                <p className="scst-incharge-email">Email: {club.clubInchargeEmail}</p>
                <a
                  href={club.collegeOrderCopyImageLink}
                  className="scst-members-list-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View SC/ST Committee Members List
                </a>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">Submit a Grievance</h2>
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

export default SCSTCommittee;
