import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../AdminTable.css';

const EventsTable = () => {
  const [circulars, setCirculars] = useState([]);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/events/all');
      console.log(response.data);
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
      <h2>College Events</h2>
      <p> At KPT Mangalore, we believe that education extends beyond the classroom. Our college hosts a variety of events throughout the year that contribute to the holistic development of our students. From technical workshops and seminars to cultural festivals and sports competitions, our events aim to foster creativity, collaboration, and leadership skills.<br />

        This page showcases all the upcoming and past events that take place at our campus. Stay updated with our exciting calendar of activities and be a part of the vibrant college community that encourages learning, fun, and growth beyond academics.</p>
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
              <td>
                {
                  circular.date
                }
              </td>
              <td>
                {
                  circular.description
                }
              </td>
              <td>
                <button
                  className="action-button view-button"
                  onClick={() => handleView(circular.link)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(circular.link)}
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

export default EventsTable
