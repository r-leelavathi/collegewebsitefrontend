
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingEventsTable = () => {
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
    <div className="admin-edit-table-container">
      <h2>Upcoming Events</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>
                {circular.date
                }
              </td>
              <td>
                {
                  circular.description
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UpcomingEventsTable;
