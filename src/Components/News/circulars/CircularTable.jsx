import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';

const Circular = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/circulars/all');
      setCirculars(response.data);
    } catch (error) {
      console.error('Error fetching circulars:', error);
    }
  };

  const handleView = (imageLink) => {
    const newWindow = window.open(imageLink, '_blank');
    if (!newWindow) {
      console.error('Failed to open new window');
    }
  };


  const handleDownload = (imageLink) => {
    const fileIdMatch = imageLink.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const downloadLink = document.createElement('a');
      downloadLink.href = directDownloadLink;
      downloadLink.download = ''; // This will use the default filename
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink); // Cleanup
    } else {
      console.error('Invalid Google Drive link:', imageLink);
    }
  };
  return (
    <div className="admin-edit-table-container">
      <h2>Circulars</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>{circular.date}</td>
              <td>{circular.description}</td>
              <td>
                <button
                  className="action-button view-button"
                  onClick={() => handleView(circular.imageLink)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(circular.imageLink)}
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

export default Circular;
