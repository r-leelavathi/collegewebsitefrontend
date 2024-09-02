import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div className="app-container">
      {
        clubInfo.map((club) => (
          <div key={club.id} className=" p-6 mb-8 flex flex-wrap">
            <div className="w-[65%] mb-6">
              <h2 className="
              bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8
              text-2xl font-bold text-white mb-2">{club.clubName}</h2>
              <p className="text-black mb-4 text-justify">The National Service Scheme (NSS) Club at our college is a vibrant platform for students to engage in meaningful community service, develop leadership skills, and foster a spirit of social responsibility. Committed to the ideal of "Not Me, But You," the club encourages students to contribute to the welfare of society and to work towards the development of the community. Through diverse outreach programs, awareness campaigns, and hands-on initiatives, we nurture a generation of socially conscious and proactive citizens.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>
                <p className="mb-2 text-justify">To build a socially responsible and self-reliant community of young leaders who are dedicated to national development, ethical service, and the upliftment of society.</p>

                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>                <p className="mb-2 text-justify">To instill a sense of civic duty and social commitment in students by providing opportunities for community engagement, developing empathy and leadership through service, and fostering a culture of inclusivity, sustainability, and selfless contribution to the nation.</p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 mb-6">
              <div className="text-center">
                <img
                  src={club.clubInchargePhoto}
                  alt={club.clubIncharge}
                  className="w-44 h-44 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <p className="text-white font-semibold">Incharge : {club.clubIncharge}</p>
                <p className="text-white text-sm">Department : {club.clubInchargeDesigntion}</p>
                <p className="text-white text-sm">Phone Number : {club.clubInchargePhoneNumer}</p>
                <p className="text-white text-sm">Mail Id : {club.clubInchargeEmail}</p>
              </div>
            </div>
          </div>
        ))}
      <hr />
      <table className="event-table">
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
              <td><a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">View Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ArtLiteratureTable
