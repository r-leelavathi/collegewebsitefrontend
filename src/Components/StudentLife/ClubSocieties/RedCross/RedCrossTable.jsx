import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../ClubTable.css'; // Ensure you import the new CSS file

const RedCrossTable = () => {
  const [events, setEvents] = useState([]);
  const [clubInfo, SetClubInfo] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchClubInfo();
  }, []);

  const fetchClubInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/club_details');
      SetClubInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
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

  return (
    <div className="club_app-container">
      {clubInfo.map((club) => (
        <div key={club.id} className="club_wrapper">
          <div className="club_info-section">
            <h2 className="club_club-name">{club.clubName}</h2>
            <p className="club_description">The Red Cross Club at our college is dedicated to embodying the spirit of humanity, compassion, and service. Rooted in the principles of the Red Cross movement, the club aims to inspire students to take an active role in promoting health, safety, and well-being in their communities. Through various humanitarian activities, first-aid training, and awareness programs, we empower students to become responsible citizens who are ready to respond to emergencies and contribute positively to society.</p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">To create a compassionate community of young leaders committed to humanitarian service, health advocacy, and the promotion of global peace and understanding.</p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">To engage students in meaningful volunteer service, provide life-saving skills and health education, and foster a culture of empathy, inclusiveness, and proactive support for those in need.</p>
            </div>
          </div>
          <div className="club_incharge-section">
            <div className="club_incharge-info">
              <img
                src={club.clubInchargePhoto}
                alt={club.clubIncharge}
                className="club_incharge-photo"
              />
              <p className="club_incharge-name">Incharge : {club.clubIncharge}</p>
              <p className="club_incharge-designation">Department : {club.clubInchargeDesigntion}</p>
              <p className="club_incharge-phone">Phone Number : {club.clubInchargePhoneNumer}</p>
              <p className="club_incharge-email">Mail Id : {club.clubInchargeEmail}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="club_events-intro">
        Below is a list of activities conducted by the aforementioned club at Karnataka (Govt.) Polytechnic, Mangalore, showcasing the diverse range of events and initiatives undertaken to enrich the student experience and foster holistic development.
      </div>
      <div className="club_table-container">
      <table className="club_table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Description</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.topic}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td><a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">View Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RedCrossTable;
