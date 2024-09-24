import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';


const AdminPressTable = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const fetchPressReleases = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/press-releases/all');
      console.log(response.data);
      setPressReleases(response.data);
    } catch (error) {
      console.error('Error fetching press releases:', error);
    }
  };

  const handleView = (imageLink) => {
    console.log(imageLink);
    const newWindow = window.open(imageLink, '_blank');
    if (!newWindow) {
      console.error('Failed to open new window');
    }
  };


  const handleDownload = (imageLink) => {
    const fileIdMatch = imageLink.match(/[-\w]{25,}/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
      const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const downloadLink = document.createElement('a');
      downloadLink.href = directDownloadLink;
      downloadLink.download = ''; // This will use the default filename
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink); // Cleanup
    } else {
      console.error('Invalid Google Drive link:', imageLink);
    }
  };
  const handleEdit = (id) => {
    setEditing(id);
    const pressRelease = pressReleases.find((pr) => pr.id === id);

    // Set the fields in the editedData with correct property names
    setEditedData({
      pressReleaseDate: pressRelease.pressReleaseDate,
      pressReleaseNewPaperName: pressRelease.pressReleaseNewPaperName,
      pressReleaseDescription: pressRelease.pressReleaseDescription,
      imageLink: pressRelease.imageLink,
    });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/press-releases/update/${id}`, editedData);
      fetchPressReleases();
      setEditing(null);
    } catch (error) {
      console.error('Error updating press release:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/press-releases/delete/${id}`);
      fetchPressReleases(); // Refresh after deletion
    } catch (error) {
      console.error('Error deleting press release:', error);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Press Releases</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Paper Name</th>
            <th>Description</th>
            <th>View</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {pressReleases.map((pressRelease, index) => (
            <tr key={pressRelease.id}>
              <td>{index + 1}</td>
              <td>
                {editing === pressRelease.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="pressReleaseDate"
                    value={editedData.pressReleaseDate || ''}
                    onChange={handleChange}
                  />
                ) : (
                  pressRelease.pressReleaseDate
                )}
              </td>
              <td>
                {editing === pressRelease.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="pressReleaseNewPaperName"
                    value={editedData.pressReleaseNewPaperName || ''}
                    onChange={handleChange}
                  />
                ) : (
                  pressRelease.pressReleaseNewPaperName
                )}
              </td>
              <td>
                {editing === pressRelease.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="pressReleaseDescription"
                    value={editedData.pressReleaseDescription || ''}
                    onChange={handleChange}
                  />
                ) : (
                  pressRelease.pressReleaseDescription
                )}
              </td>
              <td>
                {editing === pressRelease.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="imageLink"
                    value={editedData.imageLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <button
                    className="action-button view-button"
                    onClick={() => handleView(pressRelease.imageLink)}
                  >
                    View
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(pressRelease.imageLink)}
                >
                  Download
                </button>
              </td>
              <td>
                {editing === pressRelease.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(pressRelease.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(pressRelease.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(pressRelease.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default AdminPressTable;
