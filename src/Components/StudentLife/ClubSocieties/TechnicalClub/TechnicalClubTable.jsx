import React, { useEffect, useState } from 'react'
import axios from 'axios'


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
      <h1 className="header">Technical Club Events</h1>
      <hr />
      {
        clubInfo.map((club) => (
          <div key={club.id} className=" p-6 mb-8 flex flex-wrap">
            <div className="w-[65%] mb-6">
              <h2 className="
              bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8
              text-2xl font-bold text-white mb-2">{club.clubName}</h2>
              <p className="text-black mb-4 text-justify">The Technical Club at our college is a dynamic platform for students to explore, innovate, and excel in the ever-evolving world of technology. We strive to ignite curiosity and passion for technical learning, providing opportunities for hands-on experience, creative problem-solving, and interdisciplinary collaboration. By embracing cutting-edge advancements and nurturing a spirit of innovation, the club equips students with the skills and confidence to shape the future of technology.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>
                <p className="mb-2 text-justify">To become a beacon of technological excellence, fostering a culture of innovation, critical thinking, and leadership among students to meet the challenges of a rapidly changing digital world.</p>

                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>
                <p className="mb-2 text-justify">To empower students with advanced technical knowledge and practical skills through workshops, projects, and collaborative learning experiences, preparing them to be pioneers and thought leaders in the global tech community.</p>
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

export default TechnicalClubTable
