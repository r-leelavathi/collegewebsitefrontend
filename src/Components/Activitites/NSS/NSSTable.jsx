import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../ClubTable.css'; // Ensure you import the new CSS file

const NSSTable = () => {
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
      console.error('Error fetching club info:', error); // Corrected error message
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/nss');
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

      <div className="club_wrapper">
        <div className="club_info-section">
          <h2 className="club_club-name">NSS</h2>
          <p className="club_description">
            The National Service Scheme (NSS) Club at our college is a vibrant platform for students to engage in meaningful community service, develop leadership skills, and foster a spirit of social responsibility. Committed to the ideal of "Not Me, But You," the club encourages students to contribute to the welfare of society and to work towards the development of the community. Through diverse outreach programs, awareness campaigns, and hands-on initiatives, we nurture a generation of socially conscious and proactive citizens.
          </p>
          <div className="club_vision-mission">
            <h3 className="club_vision-title">Vision</h3>
            <p className="club_vision-description">
              To build a socially responsible and self-reliant community of young leaders who are dedicated to national development, ethical service, and the upliftment of society.
            </p>
            <h3 className="club_mission-title">Mission</h3>
            <p className="club_mission-description">
              To instill a sense of civic duty and social commitment in students by providing opportunities for community engagement, developing empathy and leadership through service, and fostering a culture of inclusivity, sustainability, and selfless contribution to the nation.
            </p>
          </div>
        </div>
        {clubInfo
          .filter((club) => club.clubName === "NSS Unit-1")
          .map((club) => {
            return (
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
                  <p className="club_incharge-name">Incharge: {club.clubIncharge}</p>
                  <p className="club_incharge-department">Department: {club.clubInchargeDepartment}</p>
                  <p className="club_incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                  <p className="club_incharge-phone">Phone Number: {club.clubInchargePhoneNumber}</p>
                  <p className="club_incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                </div>
              </div>

            );
          })}{clubInfo
            .filter((club) => club.clubName === "NSS Unit-2")
            .map((club) => {
              return (
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
                    <p className="club_incharge-name">Incharge: {club.clubIncharge}</p>
                    <p className="club_incharge-department">Department: {club.clubInchargeDepartment}</p>
                    <p className="club_incharge-designation">Designation: {club.clubInchargeDesignation}</p>
                    <p className="club_incharge-phone">Phone Number: {club.clubInchargePhoneNumber}</p>
                    <p className="club_incharge-email">Mail Id: {club.clubInchargeEmail}</p>
                  </div>
                </div>

              );
            })}
      </div>
      <div className="club_events-intro">
        Below is a list of activities conducted by the aforementioned club at Karnataka (Govt.) Polytechnic, Mangalore...
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

export default NSSTable;
