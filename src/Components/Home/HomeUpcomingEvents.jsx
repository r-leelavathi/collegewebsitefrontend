import React, { useEffect, useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa'; // Import the hand icon
import './HomeUpcomingEvents.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const HomeUpcomingEvents = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/upcoming-events/all');
      // Convert byte array to Base64 string
      const circularsWithBase64 = response.data.map(circular => ({
        ...circular,
        base64Image: `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(circular.imageFile)))}`
      }));
      setCirculars(circularsWithBase64);
    } catch (error) {
      console.error('Error fetching circulars:', error);
    }
  };

  return (
    <div>
      <div className="event-bar">
        <div className="ribbon">Upcoming Events</div>

        <div className="event-scroll">
          <div className="event-items">
            {circulars.map((event) => (
              <div key={event.id} className="home-event-item">
                <FaHandPointRight className="event-icon" />
                {event.description}-{event.date}
              </div>
            ))}
            {circulars.map((event) => (
              <div key={`duplicate-${event.id}`} className="home-event-item">
                <FaHandPointRight className="event-icon" />
                {event.description}-{event.date}
              </div>
            ))}
          </div>
        </div>

        {/* Read More button at the end of the event scroll */}
        <Link to='/events/upcomingevents'><button className="read-more-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeUpcomingEvents;
