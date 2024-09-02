import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../ClubSocieties.css'
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
      const response = await axios.get('http://localhost:8080/api/technicalclub');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const convertGoogleDriveLink = (url) => {
    const fileIdMatch = url.match(/d\/(.+?)\//);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    return url;
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
              <p className="text-black mb-4 text-justify">The National Cadet Corps (NCC) Club at our college is a prestigious platform dedicated to fostering discipline, leadership, and patriotism among students. Aligned with the motto "Unity and Discipline," the club provides a unique opportunity for students to undergo military-style training, develop physical and mental resilience, and cultivate a spirit of service to the nation. Through drills, camps, and various outreach activities, the NCC Club molds its cadets into responsible citizens and future leaders who are committed to the ideals of national integrity and unity.</p>
              <div className="text-black">
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Vision</h3>
                <p className="mb-2 text-justify">To inspire a generation of disciplined, dedicated, and service-oriented youth who are prepared to contribute to national security, societal development, and global peace.</p>
                <h3 className="
                bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-4 mb-8 text-white
                text-lg font-semibold">Mission</h3>
                <p className="mb-2 text-justify">To empower students with the values of discipline, leadership, and selfless service through rigorous training, community service, and activities that promote national pride, unity, and responsible citizenship.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-[30%] mb-6 ml-14">
              <div className="
              bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-14 mb-8 text-white
              text-center">
                <img
                  src={convertGoogleDriveLink(club.clubInchargePhoto)}
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

      <div className='p-6 text-justify text-lg'>
        Below is a list of activities conducted by the aforementioned club at Karnataka (Govt.) Polytechnic, Mangalore, showcasing the diverse range of events and initiatives undertaken to enrich the student experience and foster holistic development.
      </div>
      <div className="club-table-container">
        <table className="club-table">
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
    </div>
  );
};

export default NCCTable
