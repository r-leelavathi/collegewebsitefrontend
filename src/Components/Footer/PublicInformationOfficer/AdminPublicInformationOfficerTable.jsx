import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';
// import './PublicInformationOfficerTable.css';

const AdminPublicInformationOfficerTable = () => {
  const [officersData, setOfficersData] = useState([]);
  const [editingOfficer, setEditingOfficer] = useState(null);
  const [updatedOfficer, setUpdatedOfficer] = useState({});

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

  const handleEdit = (officer) => {
    setEditingOfficer(officer.id);
    setUpdatedOfficer(officer);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOfficer({
      ...updatedOfficer,
      [name]: value
    });
  };

  const handleSave = () => {
    axios.put(`http://localhost:8080/api/public-information-officers/${updatedOfficer.id}`, updatedOfficer)
      .then(response => {
        setOfficersData(prevData => prevData.map(officer => officer.id === updatedOfficer.id ? updatedOfficer : officer));
        setEditingOfficer(null);
      })
      .catch(error => {
        console.error('Error updating officer:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/public-information-officers/${id}`)
      .then(() => {
        setOfficersData(prevData => prevData.filter(officer => officer.id !== id));
      })
      .catch(error => {
        console.error('Error deleting officer:', error);
      });
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Public Information Officers</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name & Designation</th>
            <th>RTI Designation</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {officersData.length > 0 ? (
            officersData.map((officer, index) => (
              <tr key={officer.id}>
                <td>{index + 1}</td>
                <td>
                  {editingOfficer === officer.id ? (
                    <>
                      <input
                        type="text"
                        className="edit-mode"
                        name="name"
                        value={updatedOfficer.name}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        className="edit-mode"
                        name="designation"
                        value={updatedOfficer.designation}
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    <>
                      <strong>{officer.name}</strong><br />
                      {officer.designation}
                    </>
                  )}
                </td>
                <td>
                  {editingOfficer === officer.id ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="rtiDesignation"
                      value={updatedOfficer.rtiDesignation}
                      onChange={handleChange}
                    />
                  ) : (
                    officer.rtiDesignation
                  )}
                </td>
                <td>
                  {editingOfficer === officer.id ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="phoneNo"
                      value={updatedOfficer.phoneNo}
                      onChange={handleChange}
                    />
                  ) : (
                    officer.phoneNo
                  )}
                </td>
                <td>
                  {editingOfficer === officer.id ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="address"
                      value={updatedOfficer.address}
                      onChange={handleChange}
                    />
                  ) : (
                    officer.address
                  )}
                </td>
                <td>
                  {editingOfficer === officer.id ? (
                    <button
                      className="action-button save-button"
                      onClick={handleSave}>Save</button>
                  ) : (
                    <>
                      <button
                        className="action-button edit-button"
                        onClick={() => handleEdit(officer)}>Edit</button>

                    </>
                  )}
                </td>
                <td><button
                  className="action-button delete-button"
                  onClick={() => handleDelete(officer.id)}>Delete</button></td>
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


export default AdminPublicInformationOfficerTable
