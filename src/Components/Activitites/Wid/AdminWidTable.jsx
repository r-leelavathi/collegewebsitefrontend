import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminWidTable = () => {
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(null); // Track the row being edited
  const [editedData, setEditedData] = useState({
    topic: '',
    date: '',
    link: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/wid');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching Women In Development events:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const eventToEdit = events.find((event) => event.id === id);
    setEditedData({
      topic: eventToEdit.topic,
      date: eventToEdit.date,
      link: eventToEdit.link
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/wid/${id}`, editedData);
      fetchEvents(); // Refresh data after saving
      setEditing(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating Women In Development event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/wid/${id}`);
      fetchEvents(); // Refresh data after deleting
    } catch (error) {
      console.error('Error deleting Women In Development event:', error);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Women In Development Events</h2>

      <div className="club_table-container">
        <table className="admin-edit-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Date</th>
              <th>Link</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>
                  {editing === event.id ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="topic"
                      value={editedData.topic}
                      onChange={handleChange}
                    />
                  ) : (
                    event.topic
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input
                      type="date"
                      className="edit-mode"
                      name="date"
                      value={editedData.date}
                      onChange={handleChange}
                    />
                  ) : (
                    event.date
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="link"
                      value={editedData.link}
                      onChange={handleChange}
                    />
                  ) : (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="action-button view-button">
                      View
                    </a>
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <button className="action-button save-button" onClick={() => handleSave(event.id)}>Save</button>
                  ) : (
                    <button className="action-button edit-button" onClick={() => handleEdit(event.id)}>Edit</button>
                  )}
                </td>
                <td>
                  <button className="action-button delete-button" onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminWidTable
