import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AwardsPage.css';

const AwardsPage = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/awards/all');
      setAwards(response.data);
    } catch (error) {
      console.error('Error fetching awards:', error);
    }
  };

  const handleViewImage = (imgLink) => {
    window.open(imgLink, '_blank');
  };

  const handleDownloadImage = (imgLink) => {
    const link = document.createElement('a');
    link.href = imgLink;
    link.download = 'award-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="awards-page">
      <h1>Awards</h1>
      <p>Our institution takes pride in recognizing the remarkable achievements of students and staff. Below are some of the prestigious awards that have been conferred over the years.</p>

      <table className="awards-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
            <th>View Image</th>
            <th>Download Image</th>
          </tr>
        </thead>
        <tbody>
          {awards.map((award, index) => (
            <tr key={award.id}>
              <td>{index + 1}</td>
              <td>{new Date(award.date).toLocaleDateString()}</td>
              <td>{award.description}</td>
              <td>
                <button
                  className="awards-action-button awards-view-button"
                  onClick={() => handleViewImage(award.imageLink)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="awards-action-button awards-download-button"
                  onClick={() => handleDownloadImage(award.imageLink)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AwardsPage;
