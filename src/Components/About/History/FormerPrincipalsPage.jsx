import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FormerPrincipalsPage.css';

const FormerPrincipalsPage = () => {
  const [principals, setPrincipals] = useState([]);

  useEffect(() => {
    fetchPrincipals();
  }, []);

  const fetchPrincipals = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/former-principals/all');
      setPrincipals(response.data);
    } catch (error) {
      console.error('Error fetching principals:', error);
    }
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
            {/* <th>Photo</th> */}
          </tr>
        </thead>
        <tbody>
          {principals.map((principal, index) => (
            <tr key={principal.id}>
              <td style={{ textAlign: 'center' }}>{index + 1}</td>
              <td>{principal.name}</td>
              <td>{principal.qualification}</td>
              <td>{principal.duration}</td>
              {/* <td>
                <img
                  src={principal.imageLink}
                  alt={principal.name}
                  className="principal-photo"
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormerPrincipalsPage;
