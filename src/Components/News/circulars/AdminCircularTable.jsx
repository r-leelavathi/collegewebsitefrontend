import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminCircularTable = () => {
  const [circulars, setCirculars] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/circulars/all');
      setCirculars(response.data);
    } catch (error) {
      console.error('Error fetching circulars:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const circular = circulars.find((circ) => circ.id === id);
    setEditedData({
      date: circular.date,
      description: circular.description,
      imageLink: circular.imageLink,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/circulars/${id}`, editedData);
      fetchCirculars(); // Refresh the data after save
      setEditing(null);
    } catch (error) {
      console.error('Error updating circular:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/circulars/delete/${id}`);
      fetchCirculars(); // Refresh the data after delete
    } catch (error) {
      console.error('Error deleting circular:', error);
    }
  };

  const handleView = (imageLink) => {
    const newWindow = window.open(imageLink, '_blank');
    if (!newWindow) {
      console.error('Failed to open new window');
    }
  };

  const handleDownload = (imageLink) => {
    const fileIdMatch = imageLink.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const downloadLink = document.createElement('a');
      downloadLink.href = directDownloadLink;
      downloadLink.download = ''; // This will use the default filename
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink); // Cleanup
    } else {
      console.error('Invalid Google Drive link:', imageLink);
    }
  };

  return (
    <div className="admin-edit-table-container">

      <h2>Circulars</h2>
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
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
                    type="date"
                    name="date"
                    className="edit-mode"
                    value={editedData.date || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.date
                )}
              </td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="text"
                    name="description"
                    className="edit-mode"
                    value={editedData.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.description
                )}
              </td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="text"
                    name="imageLink"
                    className="edit-mode"
                    value={editedData.imageLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <button
                    className="action-button view-button"
                    onClick={() => handleView(circular.imageLink)}
                  >
                    View
                  </button>
                )}
              </td>

              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(circular.imageLink)}
                >
                  Download
                </button>
              </td>
              <td>
                {editing === circular.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(circular.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(circular.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
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

export default AdminCircularTable;
