import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <div className="app-container">
      {
        clubInfo.map((club) => (
          <div key={club.id} className=" p-6 mb-8 flex flex-wrap">
            <div className="w-[65%] mb-6">
              <h2 className="
              bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8
              text-2xl font-bold text-white mb-2">{club.clubName}</h2>
              <p className="text-black mb-4 text-justify">The Red Cross Club at our college is dedicated to embodying the spirit of humanity, compassion, and service. Rooted in the principles of the Red Cross movement, the club aims to inspire students to take an active role in promoting health, safety, and well-being in their communities. Through various humanitarian activities, first-aid training, and awareness programs, we empower students to become responsible citizens who are ready to respond to emergencies and contribute positively to society.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>
                <p className="mb-2 text-justify">To create a compassionate community of young leaders committed to humanitarian service, health advocacy, and the promotion of global peace and understanding.</p>

                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>                <p className="mb-2 text-justify">To engage students in meaningful volunteer service, provide life-saving skills and health education, and foster a culture of empathy, inclusiveness, and proactive support for those in need.</p>
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

export default RedCrossTable
