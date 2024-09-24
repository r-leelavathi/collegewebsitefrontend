import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminDepartmentalActivitiesTable = () => {
  const [activities, setActivities] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/departmental-activities/all');
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const activity = activities.find(a => a.id === id);
    setEditedData({ ...activity });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/departmental-activities/delete/${id}`);
      setActivities(activities.filter(a => a.id !== id));
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/departmental-activities/update/${id}`, editedData);
      setEditing(null);
      fetchActivities(); // Refresh the data
    } catch (error) {
      console.error('Error saving activity:', error);
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
      <h2>Departmental Activities</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Department</th>
            <th>Date</th>
            <th>Description</th>
            <th>Image Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={activity.id}>
              <td>{index + 1}</td>
              <td>
                {editing === activity.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="department"
                    value={editedData.department || ''}
                    onChange={handleChange}
                  />
                ) : (
                  activity.department
                )}
              </td>
              <td>
                {editing === activity.id ? (
                  <input
                    type="date"
                    className="edit-mode"
                    name="date"
                    value={editedData.date || ''}
                    onChange={handleChange}
                  />
                ) : (
                  activity.date
                )}
              </td>
              <td>
                {editing === activity.id ? (
                  <textarea
                    className="edit-mode"
                    name="description"
                    value={editedData.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  activity.description
                )}
              </td>
              <td>
                {editing === activity.id ? (
                  <input
                    type="url"
                    className="edit-mode"
                    name="imageLink"
                    value={editedData.imageLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={activity.imageLink} target="_blank" rel="noopener noreferrer">View Image</a>
                )}
              </td>
              <td>
                {editing === activity.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(activity.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(activity.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(activity.id)}
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

export default AdminDepartmentalActivitiesTable;
