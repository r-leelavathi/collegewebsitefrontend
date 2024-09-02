
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ClubSocietiesForm = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ topic: '', description: '', date: '', link: '' });
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editEvent) {
        await axios.put('http://localhost:8080/api/club_details/${editEvent.id}', newEvent);
        setEditEvent(null);
      } else {
        await axios.post('http://localhost:8080/api/club_details', newEvent);
      }
      setNewEvent({ topic: '', description: '', date: '', link: '' });
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setNewEvent({ topic: event.topic, description: event.description, date: event.date, link: event.link });
    setEditEvent(event);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8080/api/club_details/${id}');
      fetchEvents();

    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="App">
      <h1>Technical Club Events</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="clubName"
          value={newEvent.clubName}
          onChange={handleInputChange}
          placeholder="Enter Name of the Club"
          required
        />
        <input
          type="text"
          name="clubIncharge"
          value={newEvent.clubIncharge}
          onChange={handleInputChange}
          placeholder="Enter the name of the in-charge "
          required
        />
        <input
          type="text"
          name="clubInchargeDesigntion"
          value={newEvent.clubInchargeDesigntion}
          onChange={handleInputChange}
          placeholder="Enter designation of the in-charge "
          required
        />
        <input
          type="number"
          name="clubInchargePhoneNumer"
          value={newEvent.clubInchargePhoneNumer}
          onChange={handleInputChange}
          placeholder="Enter the phone number of in-charge"
        />
        <input
          type="email"
          name="clubInchargeEmail"
          value={newEvent.clubInchargeEmail}
          onChange={handleInputChange}
          placeholder="Enter the email id of in-charge"
        />
        <input
          type="text"
          name="clubInchargePhoto"
          value={newEvent.clubInchargePhoto}
          onChange={handleInputChange}
          placeholder="Enter the in-charge photo link"
        />
        <button type="submit">{editEvent ? 'Update Event' : 'Add Event'}</button>
      </form>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.topic}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p><a href={event.link} target="_blank" rel="noopener noreferrer">Event Link</a></p>
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ClubSocietiesForm
