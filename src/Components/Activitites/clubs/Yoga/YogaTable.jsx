import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../ClubTable.css'; // Ensure you import the new CSS file

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
      <div className="studentCouncil-info-and-incharge">
        <div className="studentCouncil-info-section">
          <h2 className="studentCouncil-club-name">YOGA</h2>
          <p className="studentCouncil-description">
            The Yoga Club at our college is a sanctuary for students to connect with their inner selves and find balance amidst their academic pursuits. We aim to create a nurturing environment where both body and mind are strengthened through the practice of yoga. By integrating ancient wisdom with modern practices, we empower our students to lead healthier, more mindful lives. The Yoga Club welcomes everyone, regardless of experience, to join and experience the transformative power of yoga.

          </p>
          <div className="studentCouncil-vision-mission">
            <h3 className="studentCouncil-vision-title">Vision</h3>
            <p className="studentCouncil-vision-description">
              To foster a harmonious community of students who embrace physical, mental, and spiritual wellness, cultivating resilience and inner peace through the practice of yoga.
            </p>
            <h3 className="studentCouncil-mission-title">Mission</h3>
            <p className="studentCouncil-mission-description">
              To promote a holistic lifestyle among students by encouraging regular yoga practice, fostering mindfulness, and building a supportive community that values health, well-being, and personal growth.
            </p>
          </div>
        </div>

        {/* Right Side - Officers */}
        <div className="studentCouncil-incharge-details">
          {clubInfo
            .filter((club) => club.clubName === "Yoga1" || club.clubName === "Yoga2")
            .map((club) => (
              <div className="studentCouncil-incharge-section" key={club.clubIncharge}>
                <div className="studentCouncil-incharge-photo-container">
                  <iframe
                    src={getIframeLink(club.clubInchargeImageLink)}
                    title={club.clubIncharge}
                    className="studentCouncil-incharge-photo"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="studentCouncil-incharge-name">Incharge: {club.clubIncharge}</p>
                <p className="studentCouncil-incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                <p className="studentCouncil-incharge-designation">Department: {club.clubInchargeDepartment}</p>
                <p className="studentCouncil-incharge-phone">Phone Number: {club.clubInchargePhoneNumer}</p>
                <p className="studentCouncil-incharge-email">Mail Id: {club.clubInchargeEmail}</p>
              </div>
            ))}
        </div>
      </div>

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
