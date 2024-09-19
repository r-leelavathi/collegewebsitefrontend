import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../ClubTable.css'; // Ensure you import the new CSS file

const SportsTable = () => {
  const [events, setEvents] = useState([]);
  const [clubInfo, setClubInfo] = useState([]);

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

  const getIframeLink = (googleDriveLink) => {
    if (typeof googleDriveLink === 'string') {
      const fileIdMatch = googleDriveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return googleDriveLink;
  };
  return (
    <div className="club_app-container">
      {clubInfo
        .filter((club) => club.clubName === "SPORTS")
        .map((club) => (
          <div key={club.id} className="club_wrapper">
            <div className="club_info-section">
              <h2 className="club_club-name">{club.clubName}</h2>
              <p className="club_description">
                The Sports Club at our college is more than just a place for physical activity; it is a thriving community that champions the spirit of teamwork, discipline, and resilience. We believe in the power of sports to shape character, build leadership, and promote a healthy, balanced lifestyle. By engaging students in a variety of sports and fitness activities, the club fosters camaraderie and instills a sense of fair play, encouraging every member to strive for excellence both on and off the field.
              </p>
              <div className="club_vision-mission">
                <h3 className="club_vision-title">Vision</h3>
                <p className="club_vision-description">
                  To cultivate a vibrant sporting culture that nurtures physical fitness, sportsmanship, and personal growth, empowering students to achieve their full potential through the joy of sports.
                </p>
                <h3 className="club_mission-title">Mission</h3>
                <p className="club_mission-description">
                  To provide a diverse range of sports and recreational opportunities that encourage participation, develop athletic skills, and promote wellness, while building a community that values teamwork, perseverance, and mutual respect.
                </p>
              </div>
            </div>
            <div className="club_incharge-section">
              <div className="club_incharge-info">
                <div className="club_incharge-photo-container">
                  <iframe
                    src={getIframeLink(club.clubInchargeImageLink)}
                    title={club.clubIncharge}
                    className="club_incharge-photo"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <div className="overlay"></div>
                </div>
                <p className="club_incharge-name">Incharge : {club.clubIncharge}</p>
                <p className="club_incharge-designation">Designation : {club.clubInchargeDesignation}</p>
                <p className="club_incharge-designation">Department : {club.clubInchargeDepartment}</p>
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

export default SportsTable;
