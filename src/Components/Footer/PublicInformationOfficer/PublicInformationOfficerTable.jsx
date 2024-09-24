import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PublicInformationOfficerTable.css'

const PublicInformationOfficerTable = () => {
  const [officersData, setOfficersData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:8080/api/public-information-officers')
      .then(response => {
        setOfficersData(response.data);
      })
      .catch(error => {
        console.error('Error fetching public information officer data:', error);
      });
  }, []);

  return (
    <div className="pio-table-container">
      <h2>Public Information Officers</h2>
      <table className="pio-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name & Designation</th>
            <th>RTI Designation</th>
            <th>Phone Number</th>
            <th>Address</th>
            {/* <th>Email</th> */}
          </tr>
        </thead>
        <tbody>
          {officersData.length > 0 ? (
            officersData.map((officer, index) => (
              <tr key={officer.id}>
                <td>{index + 1}</td>
                <td>
                  <strong>{officer.name}</strong><br />
                  {officer.designation}
                </td>
                <td>{officer.rtiDesignation}</td>
                <td>{officer.phoneNo}</td>
                <td>{officer.address}
                  <tr>
                    {officer.email && officer.email.split(',').map((email, i) => (
                      <a key={i} href={`mailto:${email.trim()}`}>{email.trim()}</a>
                    ))}</tr>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PublicInformationOfficerTable;
