import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RtiTable.css';

const RtiTable = () => {
  const [rtiFiles, setRtiFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/rti')
      .then(response => {
        setRtiFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching the RTI Files:', error);
      });
  }, []);

  return (
    <div className="admin-edit-table-container">
      <h1>RTI Files</h1>
      <p>
        The document 4(1) contains the following:
        <ol>
          <li>The particulars of its organisation, functions, and duties.</li>
          <li>The powers and duties of its officers and employees.</li>
          <li>The procedure followed in the decision-making process, including channels of supervision and accountability.</li>
          <li>The monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations.</li>
          <li>A directory of its officers and employees.</li>
          <li>The names, designations, and other particulars of the Public Information Officers.</li>
        </ol>
      </p>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Year</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {rtiFiles.map((file, index) => (
            <tr key={file.rtiId}>
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td style={{ textAlign: 'center' }}>{file.rtiYear}</td>
              <td style={{ textAlign: 'center' }}><a href={file.rtiLink} target="_blank"
                className="action-button view-button" rel="noopener noreferrer">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RtiTable;
