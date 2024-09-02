import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ClubTable.css'; // Ensure you import the updated CSS file

const YogaTable = () => {
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

  return (
    <div className="club_app-container">
      {clubInfo.map((club) => (
        <div key={club.id} className="club_wrapper">
          <div className="club_info-section">
            <h2 className="club_club-name">
              {club.clubName}
            </h2>
            <p className="club_description">
              The Yoga Club at our college is a sanctuary for students to connect with their inner selves and find balance amidst their academic pursuits. We aim to create a nurturing environment where both body and mind are strengthened through the practice of yoga. By integrating ancient wisdom with modern practices, we empower our students to lead healthier, more mindful lives. The Yoga Club welcomes everyone, regardless of experience, to join and experience the transformative power of yoga.
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
                <td>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="club_event-link"
                  >
                    View Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YogaTable;
