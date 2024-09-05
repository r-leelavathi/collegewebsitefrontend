import React, { useState, useEffect } from 'react';
import axios from 'axios';
const YogaForm = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ topic: '', description: '', date: '', link: '' });
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/yoga');
      setEvents(response.data);
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
        await axios.put('http://localhost:8080/api/yoga/${editEvent.id}', newEvent);
        setEditEvent(null);
      } else {
        await axios.post('http://localhost:8080/api/yoga', newEvent);
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
      await axios.delete('http://localhost:8080/api/yoga/${id}');
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
          name="topic"
          value={newEvent.topic}
          onChange={handleInputChange}
          placeholder="Topic"
          required
        />
        <input
          type="text"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="link"
          value={newEvent.link}
          onChange={handleInputChange}
          placeholder="Link"
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

export default YogaForm
