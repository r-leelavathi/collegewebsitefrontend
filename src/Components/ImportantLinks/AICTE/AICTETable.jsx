import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AICTETable.css';

const AICTETable = () => {
  const [aicteFiles, setAicteFiles] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:8013/api/aicte') // Update the URL according to your backend endpoint
      .then(response => {
        setAicteFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="aicte-table-container">
      <h2 className="aicte-heading">AICTE Files</h2>
      <p className="aicte-description">
        The All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education, under Department of Higher Education, Ministry of Human Resource Development. It gives approvals for every program in every year. The Extension of Approval (EOA) letters are listed here.
      </p>
      
      <table className="aicte-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Year</th>
            <th>Extension of Approval</th>
          </tr>
        </thead>
        <tbody>
          {aicteFiles.map((file, index) => (
            <tr key={file.aicteId}>
              <td>{index + 1}</td>
              <td>{file.aicteYear}</td>
              <td><a href={file.aicteLink} target="_blank" rel="noopener noreferrer">View Document</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AICTETable;
