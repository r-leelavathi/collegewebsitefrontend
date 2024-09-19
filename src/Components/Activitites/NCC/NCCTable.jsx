import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../ClubTable.css'; // Ensure you import the new CSS file

const NCCTable = () => {
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
      const response = await axios.get('http://localhost:8080/api/ncc');
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
        .filter((club) => club.clubName === "NCC")
        .map((club) => (
          <div key={club.id} className="club_wrapper">
            <div className="club_info-section">
              <h2 className="club_club-name">{club.clubName}</h2>
              <p className="club_description">The National Cadet Corps (NCC) Club at our college is a prestigious platform dedicated to fostering discipline, leadership, and patriotism among students. Aligned with the motto "Unity and Discipline," the club provides a unique opportunity for students to undergo military-style training, develop physical and mental resilience, and cultivate a spirit of service to the nation. Through drills, camps, and various outreach activities, the NCC Club molds its cadets into responsible citizens and future leaders who are committed to the ideals of national integrity and unity.</p>
              <div className="club_vision-mission">
                <h3 className="club_vision-title">Vision</h3>
                <p className="club_vision-description">To inspire a generation of disciplined, dedicated, and service-oriented youth who are prepared to contribute to national security, societal development, and global peace.</p>
                <h3 className="club_mission-title">Mission</h3>
                <p className="club_mission-description">To empower students with the values of discipline, leadership, and selfless service through rigorous training, community service, and activities that promote national pride, unity, and responsible citizenship.</p>
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

export default NCCTable;
