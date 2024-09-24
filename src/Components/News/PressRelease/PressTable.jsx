import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';

const Press = () => {
  const [pressReleases, setPressReleases] = useState([]);

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const fetchPressReleases = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/press-releases/all');
      console.log(response.data)
      setPressReleases(response.data);
    } catch (error) {
      console.error('Error fetching press releases:', error);
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
    <div className="aadmin-edit-table-container">
      <h2>Press Releases</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Paper Name</th>
            <th>Description</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {pressReleases.map((pressRelease, index) => (
            <tr key={pressRelease.id}>
              <td>{index + 1}</td>
              <td>{pressRelease.pressReleaseDate}</td>
              <td>{pressRelease.pressReleaseNewPaperName}</td>
              <td>{pressRelease.pressReleaseDescription}</td>
              <td>
                <button
                  className="action-button view-button"
                  onClick={() => handleView(pressRelease.imageLink)}
                >
                  View
                </button>
              </td><td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(pressRelease.imageLink)}
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

export default Press;
