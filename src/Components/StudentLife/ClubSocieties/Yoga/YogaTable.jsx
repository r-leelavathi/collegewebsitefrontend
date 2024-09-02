import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YogaForm from './YogaForm';

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
      console.error('Error fetching events:', error);
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

  return (
    <div className="app-container">
      {
        clubInfo.map((club) => (
          <div key={club.id} className=" p-6 mb-8 flex flex-wrap">
            <div className="w-[65%] mb-6">
              <h2 className="
              bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8
              text-2xl font-bold text-white mb-2">{club.clubName}</h2>
              <p className="text-black mb-4 text-justify">The Yoga Club at our college is a sanctuary for students to connect with their inner selves and find balance amidst their academic pursuits. We aim to create a nurturing environment where both body and mind are strengthened through the practice of yoga. By integrating ancient wisdom with modern practices, we empower our students to lead healthier, more mindful lives. The Yoga Club welcomes everyone, regardless of experience, to join and experience the transformative power of yoga.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>                <p className="mb-2 text-justify">To foster a harmonious community of students who embrace physical, mental, and spiritual wellness, cultivating resilience and inner peace through the practice of yoga.</p>

                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>                <p className="mb-2 text-justify text-black">To promote a holistic lifestyle among students by encouraging regular yoga practice, fostering mindfulness, and building a supportive community that values health, well-being, and personal growth.</p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 mb-6">
              <div className="text-center">
                <img
                  src={club.clubInchargePhoto}
                  alt={club.clubIncharge}
                  className="w-60 h-60 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <p className="text-black font-semibold">Incharge : {club.clubIncharge}</p>
                <p className="text-black text-sm">Department : {club.clubInchargeDesigntion}</p>
                <p className="text-black text-sm">Phone Number : {club.clubInchargePhoneNumer}</p>
                <p className="text-black text-sm">Mail Id : {club.clubInchargeEmail}</p>
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

export default YogaTable;