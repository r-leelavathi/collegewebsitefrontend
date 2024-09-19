import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminStaffInchargeTable = () => {
  const [clubDetails, setClubDetails] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchClubDetails();
  }, []);

  const fetchClubDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      setClubDetails(response.data);
    } catch (error) {
      console.error('Error fetching club details:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const club = clubDetails.find(c => c.id === id);
    setEditedData({ ...club });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/club_details/${id}`);
      setClubDetails(clubDetails.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting club details:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/club_details/${id}`, editedData);
      setEditing(null);
      fetchClubDetails(); // Refresh the data
    } catch (error) {
      console.error('Error saving club details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Club Details</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Club Name</th>
            <th>Incharge</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Image Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clubDetails.map((club, index) => (
            <tr key={club.id}>
              <td>{index + 1}</td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubName"
                    value={editedData.clubName || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubName
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubIncharge"
                    value={editedData.clubIncharge || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubIncharge
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubInchargeDepartment"
                    value={editedData.clubInchargeDepartment || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubInchargeDepartment
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubInchargeDesigntion"
                    value={editedData.clubInchargeDesigntion || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubInchargeDesigntion
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubInchargePhoneNumer"
                    value={editedData.clubInchargePhoneNumer || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubInchargePhoneNumer
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="email"
                    name="clubInchargeEmail"
                    value={editedData.clubInchargeEmail || ''}
                    onChange={handleChange}
                  />
                ) : (
                  club.clubInchargeEmail
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <input
                    type="text"
                    name="clubInchargeImageLink"
                    value={editedData.clubInchargeImageLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={club.clubInchargeImageLink} target="_blank" rel="noopener noreferrer">View Image</a>
                )}
              </td>
              <td>
                {editing === club.id ? (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-save-button"
                    onClick={() => handleSave(club.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-edit-button"
                    onClick={() => handleEdit(club.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-delete-button"
                  onClick={() => handleDelete(club.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminStaffInchargeTable;
