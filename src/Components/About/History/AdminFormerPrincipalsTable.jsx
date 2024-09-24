import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminFormerPrincipalsTable = () => {
  const [principals, setPrincipals] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

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

  const handleEdit = (id) => {
    setEditing(id);
    const principal = principals.find(p => p.id === id);
    setEditedData({ ...principal });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/former-principals/delete/${id}`);
      setPrincipals(principals.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting principal:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/former-principals/update/${id}`, editedData);
      setEditing(null);
      fetchPrincipals(); // Refresh the data
    } catch (error) {
      console.error('Error saving principal:', error);
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
      <h2>Former Principals</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Duration</th>
            <th>Image Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {principals.map((principal, index) => (
            <tr key={principal.id}>
              <td>{index + 1}</td>
              <td>
                {editing === principal.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="name"
                    value={editedData.name || ''}
                    onChange={handleChange}
                  />
                ) : (
                  principal.name
                )}
              </td>
              <td>
                {editing === principal.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="qualification"
                    value={editedData.qualification || ''}
                    onChange={handleChange}
                  />
                ) : (
                  principal.qualification
                )}
              </td>
              <td>
                {editing === principal.id ? (
                  <input
                    type="text"
                    name="duration"
                    className="edit-mode"
                    value={editedData.duration || ''}
                    onChange={handleChange}
                  />
                ) : (
                  principal.duration
                )}
              </td>
              <td>
                {editing === principal.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="imageLink"
                    value={editedData.imageLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={principal.imageLink} target="_blank" rel="noopener noreferrer">View Image</a>
                )}
              </td>
              <td>
                {editing === principal.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(principal.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(principal.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(principal.id)}
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

export default AdminFormerPrincipalsTable;
