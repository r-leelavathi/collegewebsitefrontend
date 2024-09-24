import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminArchievesTable = () => {
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/events/all');
      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const circular = events.find(c => c.id === id);
    setEditedData({ ...circular });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/events/delete/${id}`);
      setEvents(events.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting events:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/events/update/${id}`, editedData);
      setEditing(null);
      fetchCirculars(); // Refresh the data
    } catch (error) {
      console.error('Error saving events:', error);
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
    const newWindow = window.open(link, '_blank');
    if (!newWindow) {
      console.error('Failed to open new window');
    }
  };

  const handleDownload = (link) => {
    const fileIdMatch = link.match(/[-\w]{25,}/);
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
      console.error('Invalid Google Drive link:', link);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Events @ KPT Mangalore</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
            <th>Image Link</th>
            <th>View</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="date"
                    name="date"
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
                    className="edit-mode"
                    name="description"
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
                    className="edit-mode"
                    name="link"
                    value={editedData.link || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.link
                )}
              </td>
              <td>
                <button
                  className="action-button view-button"
                  onClick={() => handleView(circular.link)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(circular.link)}
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

export default AdminArchievesTable;
