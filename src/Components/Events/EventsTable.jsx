import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventsTable = () => {
  const [circulars, setCirculars] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchCirculars();
  }, []);

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/circulars/all');
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

  const handleEdit = (id) => {
    setEditing(id);
    const circular = circulars.find(c => c.id === id);
    setEditedData({ ...circular });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/circulars/delete/${id}`);
      setCirculars(circulars.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting circular:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/circulars/${id}`, editedData);
      setEditing(null);
      fetchCirculars(); // Refresh the data
    } catch (error) {
      console.error('Error saving circular:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };
  const handleView = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/circulars/${id}/image`);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        // Open a new window and set the image source
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.document.write(
            `<html><head><title>Image Preview</title></head><body style="margin:0"><img src="${url}" alt="Circular Image" style="max-width:100%; height:auto;"/></body></html>`
          );
          newWindow.document.close();
        } else {
          console.error('Failed to open new window');
        }
      } else {
        console.error('Failed to fetch image');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };
  const handleDownload = async (id) => {
    try {
      // Make an axios request to fetch the image as a blob
      const response = await axios.get(`http://localhost:8080/api/circulars/${id}/image`, {
        responseType: 'blob', // Important to specify the response type as 'blob'
      });

      // Create a temporary download link
      const url = URL.createObjectURL(response.data);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'circular-image.jpg'; // Set the filename
      downloadLink.click();

      // Clean up the URL object
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };




  return (
    <div className="circular-table-container">
      <h2>College Events</h2>
      <p> At KPT Mangalore, we believe that education extends beyond the classroom. Our college hosts a variety of events throughout the year that contribute to the holistic development of our students. From technical workshops and seminars to cultural festivals and sports competitions, our events aim to foster creativity, collaboration, and leadership skills.<br /><br />

        This page showcases all the upcoming and past events that take place at our campus. Stay updated with our exciting calendar of activities and be a part of the vibrant college community that encourages learning, fun, and growth beyond academics.</p>
      <table className="circular-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Description</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="date"
                    name="date"
                    value={editedData.date || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.date
                )}
              </td>
              <td>
                {editing === circular.id ? (
                  <input
                    type="text"
                    name="description"
                    value={editedData.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  circular.description
                )}
              </td>
              <td>
                <button
                  className="circular-table-action-button circular-table-view-button"
                  onClick={() => handleView(circular.id)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="circular-table-action-button circular-table-download-button"
                  onClick={() => handleDownload(circular.id)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable
