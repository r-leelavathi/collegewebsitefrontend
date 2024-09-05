import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../ClubTable.css'; // Ensure you import the new CSS file

const TechnicalClubTable = () => {
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
            <h2 className="club_club-name">
              {club.clubName}
            </h2>
            <p className="club_description">
              The Technical Club at our college is a dynamic platform for students to explore, innovate, and excel in the ever-evolving world of technology. We strive to ignite curiosity and passion for technical learning, providing opportunities for hands-on experience, creative problem-solving, and interdisciplinary collaboration. By embracing cutting-edge advancements and nurturing a spirit of innovation, the club equips students with the skills and confidence to shape the future of technology.
            </p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">
                To become a beacon of technological excellence, fostering a culture of innovation, critical thinking, and leadership among students to meet the challenges of a rapidly changing digital world.
              </p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">
                To empower students with advanced technical knowledge and practical skills through workshops, projects, and collaborative learning experiences, preparing them to be pioneers and thought leaders in the global tech community.
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

export default TechnicalClubTable;
