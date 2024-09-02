import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SportsTable = () => {
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
              <p className="text-black mb-4 text-justify">The Sports Club at our college is more than just a place for physical activity; it is a thriving community that champions the spirit of teamwork, discipline, and resilience. We believe in the power of sports to shape character, build leadership, and promote a healthy, balanced lifestyle. By engaging students in a variety of sports and fitness activities, the club fosters camaraderie and instills a sense of fair play, encouraging every member to strive for excellence both on and off the field.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>
                <p className="mb-2 text-justify">To cultivate a vibrant sporting culture that nurtures physical fitness, sportsmanship, and personal growth, empowering students to achieve their full potential through the joy of sports.</p>

                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>                <p className="mb-2 text-justify">To provide a diverse range of sports and recreational opportunities that encourage participation, develop athletic skills, and promote wellness, while building a community that values teamwork, perseverance, and mutual respect.</p>
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

export default SportsTable
