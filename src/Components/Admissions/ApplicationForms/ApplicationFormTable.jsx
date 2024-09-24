import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';

const ApplicationFormTable = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admissionCirculars');
      setCirculars(response.data);
    } catch (error) {
      console.error('Error fetching admission circulars:', error);
    }
  };

  const handleDownload = async (link) => {
    try {
      const response = await axios.get(link, { responseType: 'blob' });
      const url = URL.createObjectURL(response.data);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'admission-circular.pdf'; // You can set the filename here
      downloadLink.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading circular:', error);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <h2>Admission Circulars</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Year</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>{circular.year}</td>
              <td>
                <a href={circular.link} target="_blank"

                  className="admin-edit-table-action-button"
                  rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td>
                <button

                  className="admin-edit-table-action-button"
                  onClick={() => handleDownload(circular.link)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ApplicationFormTable
