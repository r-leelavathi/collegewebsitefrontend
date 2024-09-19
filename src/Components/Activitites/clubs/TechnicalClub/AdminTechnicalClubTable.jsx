import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../ClubTable.css'; // Ensure you import the new CSS file
import { Link } from 'react-router-dom';

const AdminTechnicalClubTable = () => {
  const [events, setEvents] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);
  const [editing, setEditing] = useState(null); // Track which event is being edited
  const [editedData, setEditedData] = useState({
    topic: '',
    description: '',
    date: '',
    link: ''
  });

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

  const handleEdit = (id, event) => {
    setEditing(id); // Set the editing state to the current event's ID
    setEditedData({
      topic: event.topic,
      description: event.description,
      date: event.date,
      link: event.link,
    });
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
      await axios.put('http://localhost:8080/api/technicalclub/${id}, editedData');
      fetchEvents(); // Refresh the list of events
      setEditing(null); // Exit editing mode
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8080/api/technicalclub/${id}');
      fetchEvents(); // Refresh the list of events
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      {clubInfo.map((club) => (
        <div key={club.id} className="club_wrapper">
          <div className="club_info-section">
            <h2 className="club_club-name">{club.clubName}</h2>
            <p className="club_description">
              The Technical Club at our college is a dynamic platform for students to explore, innovate, and excel in the ever-evolving world of technology...
            </p>
            {/* Club vision and mission */}
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">To become a beacon of technological excellence...</p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">To empower students with advanced technical knowledge...</p>
            </div>
          </div>
          <div className="club_incharge-section">
            <div className="club_incharge-info">
              <img src={club.clubInchargePhoto} alt={club.clubIncharge} className="club_incharge-photo" />
              <p className="club_incharge-name">Incharge: {club.clubIncharge}</p>
              <p className="club_incharge-designation">Department: {club.clubInchargeDesigntion}</p>
              <p className="club_incharge-phone">Phone: {club.clubInchargePhoneNumer}</p>
              <p className="club_incharge-email">Email: {club.clubInchargeEmail}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="club_events-intro">
        Below is a list of activities conducted by the aforementioned club...
      </div>
      <div className="club_table-container">
        <table className="club_table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Description</th>
              <th>Date</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>
                  {editing === event.id ? (
                    <input type="text" name="topic" value={editedData.topic} onChange={handleChange} />
                  ) : (
                    event.topic
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input type="text" name="description" value={editedData.description} onChange={handleChange} />
                  ) : (
                    event.description
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input type="date" name="date" value={editedData.date} onChange={handleChange} />
                  ) : (
                    event.date
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <input type="text" name="link" value={editedData.link} onChange={handleChange} />
                  ) : (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">
                      View Link
                    </a>
                  )}
                </td>
                <td>
                  {editing === event.id ? (
                    <button onClick={() => handleSave(event.id)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(event.id, event)}>Edit</button>
                      <button onClick={() => handleDelete(event.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTechnicalClubTable
