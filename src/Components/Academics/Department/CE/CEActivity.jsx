import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../DepartmentActivity.css';

const CEActivity = () => {
  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/departmental-activities')
      .then(response => {
        const filteredData = response.data.filter(activity => activity.department === 'CE');
        setActivitiesData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching departmental activities:', error);
      });
  }, []);

  const convertDriveLink = (driveLink) => {
    if (typeof driveLink === 'string') {
      const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return driveLink;
  };

  const openImageInNewTab = (imageLink) => {
    const convertedLink = convertDriveLink(imageLink);
    window.open(convertedLink, '_blank');
  };

  return (
    <div className="departmental-activities-container">
      <h2 className="departmental-activities-title">Computer Science and Engineering Department Activities</h2>
      <table className="departmental-activities-table">
        <thead>
          <tr>
            <th className="departmental-activities-header">Sl. No.</th>
            <th className="departmental-activities-header">Date</th>
            <th className="departmental-activities-header">Description</th>
            <th className="departmental-activities-header">Image</th>
          </tr>
        </thead>
        <tbody>
          {activitiesData.map((activity, index) => (
            <tr key={activity.Id}>
              <td className="departmental-activities-cell">{index + 1}</td>
              <td className="departmental-activities-cell">{activity.date}</td>
              <td className="departmental-activities-cell">{activity.description}</td>
              <td className="departmental-activities-cell">
                {activity.imageLink && (
                  <button
                    className="departmental-activities-view-button"
                    onClick={() => openImageInNewTab(activity.imageLink)}
                  >
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CEActivity
