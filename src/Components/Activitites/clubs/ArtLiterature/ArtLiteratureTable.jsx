import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../ClubTable.css'; // Ensure you import the new CSS file

const ArtLiteratureTable = () => {
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
            <p className="club_description">The Art, Literature, and Cultural Club is a dynamic hub for students who are passionate about the arts, literature, and cultural heritage. It is a space where creativity meets expression, allowing students to explore their artistic talents, delve into the world of literature, and celebrate diverse cultures. Through various activities like workshops, exhibitions, literary meets, and cultural festivals, the club aims to foster an appreciation for the rich tapestry of human expression and inspire students to contribute to the vibrant cultural fabric of our college.</p>
            <div className="club_vision-mission">
              <h3 className="club_vision-title">Vision</h3>
              <p className="club_vision-description">"To create a vibrant and inspiring environment that nurtures artistic talent, literary excellence, and cultural appreciation, enriching the college community with creativity and diverse perspectives."</p>
              <h3 className="club_mission-title">Mission</h3>
              <p className="club_mission-description">"To bring together students passionate about art, literature, and culture through events, workshops, and exhibitions that celebrate creativity and heritage. Our mission is to foster an inclusive space where students can explore their artistic potential, share ideas, and contribute to a richer cultural life within the college."</p>
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

export default ArtLiteratureTable;
