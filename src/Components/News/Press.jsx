import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Circular.css'

const Press = () => {
  const [circulars, setCirculars] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [imageSrc, setImageSrc] = useState(null);

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
      <h2>Press Releases</h2>
      <table className="circular-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Paper Name</th>
            <th>Description</th>
            <th>View</th>
            {/* <th>Download</th> */}
          </tr>
        </thead>
        <tbody>
          {circulars.map((circular, index) => (
            <tr key={circular.id}>
              <td>{index + 1}</td>
              <td>
                {circular.date}
              </td>
              <td>
                {circular.paperName}
              </td>
              <td>
                {circular.description}
              </td>
              <td>
                <button
                  className="action-button view-button"
                  onClick={() => handleView(circular.id)}
                >
                  View
                </button>
              </td>
              {/* <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(circular.id)}
                >
                  Download
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Press;
