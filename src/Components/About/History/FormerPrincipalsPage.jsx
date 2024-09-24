import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FormerPrincipalsPage.css';

const FormerPrincipalsPage = () => {
  const [principals, setPrincipals] = useState([]);
  const [selectedPrincipal, setSelectedPrincipal] = useState(null); // State to track the selected principal
  const [isPrincipalModalOpen, setIsPrincipalModalOpen] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(false); // Loading state for the image

  useEffect(() => {
    fetchPrincipals();
  }, []);

  const fetchPrincipals = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/former-principals/all');
      console.log(response.data);
      setPrincipals(response.data);
    } catch (error) {
      console.error('Error fetching principals:', error);
    }
  };

  // Function to convert Google Drive URL to a direct image link
  const getDriveImageLink = (googleDriveLink) => {
    if (typeof googleDriveLink === 'string') {
      const fileIdMatch = googleDriveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return googleDriveLink;
  };

  const handleViewClick = (principal) => {
    setSelectedPrincipal(principal);
    setLoading(true); // Set loading to true when modal opens
    setIsPrincipalModalOpen(true); // Open the modal when "View" button is clicked
  };

  const closeModal = () => {
    setIsPrincipalModalOpen(false); // Close the modal
    setSelectedPrincipal(null);
    setLoading(false); // Reset loading state
  };

  return (
    <div className="principals-page">
      <h1>Former Principals</h1>
      <p>The history of our institution is shaped by the leadership of its former principals. Below is a list of those who have served with distinction over the years.</p>

      <table className="principals-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Duration</th>
            <th>Action</th> {/* Add Action column for the "View" button */}
          </tr>
        </thead>
        <tbody>
          {principals.map((principal, index) => (
            <tr key={principal.id}>
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td style={{ textAlign: 'left' }}>{principal.name}</td>
              <td style={{ textAlign: 'left' }}>{principal.qualification}</td>
              <td>{principal.duration}</td>
              <td>
                {principal.imageLink && principal.imageLink.trim() !== '' && (
                  <button
                    className="principalview-button"
                    onClick={() => handleViewClick(principal)}
                  >
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal popup for displaying the principal's image */}
      {isPrincipalModalOpen && selectedPrincipal && (
        <div className="former_principal_modal">
          <div className="former_principal_modal-content">
            <span className="former_principal_close-button" onClick={closeModal}>&times;</span>
            {loading && <p className="loading-message">Fetching Image...</p>}
            <iframe
              src={getDriveImageLink(selectedPrincipal.imageLink)}
              title={selectedPrincipal.name}
              className="former_principal-photo"
              frameBorder="0"
              allowFullScreen
              onLoad={() => setLoading(false)} // Set loading to false once the iframe loads
            ></iframe>
            {!selectedPrincipal.imageLink && <p>No image available</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormerPrincipalsPage;
