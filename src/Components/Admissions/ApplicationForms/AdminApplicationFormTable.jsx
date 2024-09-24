import './../../../AdminTable.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminApplicationFormTable = () => {
  const [circulars, setCirculars] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

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

  const handleEdit = (id) => {
    setEditing(id);
    const circular = circulars.find((circular) => circular.id === id);
    setEditedData({ ...circular });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admissionCirculars/${id}`);
      setCirculars(circulars.filter((circular) => circular.id !== id));
    } catch (error) {
      console.error('Error deleting circular:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/admissionCirculars/${id}`, editedData);
      setEditing(null);
      fetchCirculars(); // Refresh data after saving
    } catch (error) {
      console.error('Error saving circular:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleView = (link) => {
    window.open(link, '_blank');
  };

  const handleDownload = (link) => {
    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.download = 'admission-circular.pdf';
    linkElement.click();
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Admission Circulars</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Year</th>
            <th>Link</th>
            <th>View</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="year"
                    value={editedData.year || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.year
                )}
              </td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="link"
                    value={editedData.link || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={circular.link} target="_blank" rel="noopener noreferrer">View</a>
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button"
                  onClick={() => handleView(circular.link)}
                >
                  View
                </button>
              </td><td>
                <button
                  className="admin-edit-table-action-button"
                  onClick={() => handleDownload(circular.link)}
                >
                  Download
                </button></td><td>
                {editing === circular.id ? (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-save-button"
                    onClick={() => handleSave(circular.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-edit-button"
                    onClick={() => handleEdit(circular.id)}
                  >
                    Edit
                  </button>
                )}</td><td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-delete-button"
                  onClick={() => handleDelete(circular.id)}
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


export default AdminApplicationFormTable;
