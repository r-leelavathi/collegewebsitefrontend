import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../../App.css'; // Ensure you import the new CSS file

const AdminYogaTable = () => {
  const [events, setEvents] = useState([]);
  const [clubInfo, SetClubInfo] = useState([]);
  const [editing, setEditing] = useState(null); // Track the editing event id
  const [editedData, setEditedData] = useState({ topic: '', description: '', date: '', link: '' });

  useEffect(() => {
    fetchEvents();
    fetchClubInfo();
  }, []);

  const fetchClubInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      SetClubInfo(response.data);
    } catch (error) {
      console.error('Error fetching club info:', error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/yoga');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleEdit = (eventId, event) => {
    setEditing(eventId);
    setEditedData({
      topic: event.topic,
      description: event.description,
      date: event.date,
      link: event.link
    });
  };
  const handleView = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/circulars/${id}/image`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        // Open a new window and set the image source
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.document.write(
            `<html><head><title>Image Preview</title></head><body style="margin:0"><img src="${url}" alt="Circular Image" style="max-width:100%; height:auto;"/></body></html>`
          );
          newWindow.document.close();
        } else {
          console.error('Failed to open new window');
        }
      } else {
        console.error('Failed to fetch image');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };
  const handleDownload = async (id) => {
    try {
      // Make an axios request to fetch the image as a blob
      const response = await axios.get(`http://localhost:8080/api/circulars/${id}/image`, {
        responseType: 'blob', // Important to specify the response type as 'blob'
      });

      // Create a temporary download link
      const url = URL.createObjectURL(response.data);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'circular-image.jpg'; // Set the filename
      downloadLink.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };
  const handleSave = async (eventId) => {
    try {
      await axios.put('http://localhost:8080/api/yoga/${eventId}', editedData);
      setEvents(events.map(event => (event.id === eventId ? { ...event, ...editedData } : event)));
      setEditing(null); // Stop editing after save
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      console.log(eventId)
      await axios.delete('http://localhost:8080/api/yoga/${eventId}');
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div className="club_app-container">
      {clubInfo.map((club) => (
        <div key={club.id} className="club_wrapper">
          <div className="club_info-section">
            <h2 className="club_club-name">{club.clubName}</h2>
            <p className="club_description">
              The Yoga Club at our college is a sanctuary for students to connect with their inner selves and find balance amidst their academic pursuits. We aim to create a nurturing environment where both body and mind are strengthened through the practice of yoga.
            </p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">
                To foster a harmonious community of students who embrace physical, mental, and spiritual wellness, cultivating resilience and inner peace through the practice of yoga.
              </p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">
                To promote a holistic lifestyle among students by encouraging regular yoga practice, fostering mindfulness, and building a supportive community that values health, well-being, and personal growth.
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
        Below is a list of activities conducted by the aforementioned club at Karnataka (Govt.) Polytechnic, Mangalore.
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
                    <input
                      type="text"
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
                      type="text"
                      name="description"
                      value={editedData.description}
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
                      name="link"
                      value={editedData.link}
                      onChange={handleChange}
                    />
                  ) : (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">
                      View Link
                    </a>
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
                  <button
                    className="admin-edit-table-action-button admin-edit-table-view-button"
                    onClick={() => handleView(event.id)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    className="admin-edit-table-action-button admin-edit-table-download-button"
                    onClick={() => handleDownload(event.id)}
                  >
                    Download
                  </button>
                </td>
                <td>
                  {editing === event.id ? (
                    <button
                      className="admin-edit-table-action-button admin-edit-table-save-button"
                      onClick={() => handleSave(event.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="admin-edit-table-action-button admin-edit-table-edit-button"
                      onClick={() => handleEdit(event.id)}
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="admin-edit-table-action-button admin-edit-table-delete-button"
                    onClick={() => handleDelete(event.id)}
                  >
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

export default AdminYogaTable;