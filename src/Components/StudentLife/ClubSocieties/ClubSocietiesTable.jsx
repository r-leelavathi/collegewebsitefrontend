import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClubSocietiesForm from './ClubSocietiesForm';
const ClubSocietiesTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }

  };

  return (
    <div className="app-container">
      <h1 className="header">Club </h1>
      <hr />
      <ClubSocietiesForm />
      <hr />
      <table className="event-table">
        <thead>
          <tr>
            <th>Name of the Club</th>
            <th>Staff Incharge</th>
            <th>Department</th>
            <th>Mail Id</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.clubName}</td>
              <td>{event.clubIncharge}</td>
              <td>{event.clubInchargeDesigntion}</td>
              <td>{event.clubInchargeEmail}</td>
              <td>{event.clubInchargePhoneNumer}</td>
              <td><a href={event.clubInchargePhoto} target="_blank" rel="noopener noreferrer" className="event-link">View Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubSocietiesTable
