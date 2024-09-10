import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../ClubTable.css'; // Ensure you import the new CSS file

const WidTable = () => {
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
            <h2 className="club_club-name">{club.clubName}</h2>
            <p className="club_description">
              The Women in Development (WID) club is dedicated to empowering women by fostering a supportive environment that promotes personal growth, leadership, and professional development. The club is committed to addressing gender disparities, advocating for equal opportunities, and equipping women with the skills and confidence to excel in all spheres of life. Through workshops, mentorship programs, and community outreach, WID aims to create a platform where women can connect, learn, and inspire each other, driving positive change within the college and beyond.
            </p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">
                To cultivate a progressive and inclusive community where women are empowered to lead, innovate, and make significant contributions to society, breaking barriers and redefining their roles in development.
              </p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">
                To support and inspire women through education, mentorship, and advocacy, providing opportunities for skill enhancement, leadership development, and active engagement in social and professional spheres. Our mission is to champion gender equality, nurture talent, and drive initiatives that uplift and empower women to achieve their fullest potential.
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
                <td><a href={event.link} target="_blank" rel="noopener noreferrer" className="club_event-link">View Link</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WidTable
