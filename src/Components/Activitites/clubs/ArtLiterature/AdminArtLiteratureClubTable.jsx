import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../ClubTable.css'; // Ensure you import the new CSS file
import { Link } from 'react-router-dom';

const AdminArtLiteratureClubTable = () => {
  const [events, setEvents] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);
  const [editing, setEditing] = useState(null); // To track which event is being edited
  const [editedData, setEditedData] = useState({}); // To store edited event data

  useEffect(() => {
    fetchEvents();
    fetchClubInfo();
  }, []);

  const fetchClubInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      setClubInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching club info:', error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/technicalclub');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const eventToEdit = events.find((event) => event.id === id);
    setEditedData(eventToEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async (id) => {
    try {
      await axios.put('http://localhost:8080/api/technicalclub/${id}', editedData);
      fetchEvents(); // Refresh the list after saving
      setEditing(null);
    } catch (error) {
      console.error('Error saving the event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8080/api/technicalclub/${id}');
      fetchEvents(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting the event:', error);
    }
  };

  return (
    <div className="club_app-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      {clubInfo.map((club) => (
        <div key={club.id} className="club_wrapper">
          <div className="club_info-section">
            <h2 className="club_club-name">{club.clubName}</h2>
            <p className="club_description">
              The Art & Literature Club is dedicated to fostering creativity and appreciation for various forms of art and literature within our student community.
            </p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">
                To cultivate a vibrant community of students passionate about the arts and literature, encouraging creative expression and critical thinking.
              </p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">
                To provide a platform for students to explore, express, and enhance their creative and literary talents, fostering a love for the arts.
              </p>
            </div>
          </div>
          <div className="club_incharge-section">
            <div className="club_incharge-info">
              <img
                src={club.clubInchargePhoto}
                alt={club.clubIncharge}
                className="club_incharge-photo"
              />
              <p className="club_incharge-name">Incharge: {club.clubIncharge}</p>
              <p className="club_incharge-designation">Department: {club.clubInchargeDesigntion}</p>
              <p className="club_incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
              <p className="club_incharge-email">Mail Id: {club.clubInchargeEmail}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="club_events-intro">
        Below is a list of activities conducted by the aforementioned club showcasing their efforts.
      </div>
      <div className="club_table-container">
        <table className="club_table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Description</th>
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
                      name="topic"
                      value={editedData.topic || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    event.topic
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input
                      type="text"
                      name="description"
                      value={editedData.description || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    event.description
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input
                      type="date"
                      name="date"
                      value={editedData.date || ''}
                      onChange={handleChange}
                    />
                  ) : (
                    event.date
                  )}
                </td>
                <td>
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">
                    View Link
                  </a>
                </td>
                <td>
                  {editing === event.id ? (
                    <button className="circular-table-save-button" onClick={() => handleSave(event.id)}>
                      Save
                    </button>
                  ) : (
                    <button className="circular-table-edit-button" onClick={() => handleEdit(event.id)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button className="circular-table-delete-button" onClick={() => handleDelete(event.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminArtLiteratureClubTable
