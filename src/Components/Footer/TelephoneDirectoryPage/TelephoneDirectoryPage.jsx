import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TelephoneDirectoryPage.css'; // Ensure you have this CSS for styling

const TelephoneDirectoryPage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetchClubDetails();
  }, []);

  const fetchClubDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details'); // Replace with actual API endpoint
      setClubs(response.data);
    } catch (error) {
      console.error('Error fetching club details:', error);
    }
  };

  return (
    <div className="club-details-page">
      <h1>Telephone Directory</h1>
      <table className="club-details-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Unit Name</th>
            <th>Staff Incharge</th>
            <th>Department</th>
            {/* <th>Designation</th> */}
            <th>Contact Number</th>
            <th>Email</th>
            {/* <th>Image</th>s */}
          </tr>
        </thead>
        <tbody>
          {clubs.map((club, index) => (
            <tr key={club.id}>
              <td>{index + 1}</td>
              <td>{club.clubName}</td>
              <td>{club.clubIncharge}</td>
              <td>{club.clubInchargeDepartment}</td>
              {/* <td>{club.clubInchargeDesigntion}</td> */}
              <td>{club.clubInchargePhoneNumer}</td>
              <td><a href={`mailto:${club.clubInchargeEmail}`}>{club.clubInchargeEmail}</a></td>
              {/* <td>
                <img
                  src={club.clubInchargeImageLink}
                  alt={club.clubIncharge}
                  className="club-incharge-image"
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TelephoneDirectoryPage;
