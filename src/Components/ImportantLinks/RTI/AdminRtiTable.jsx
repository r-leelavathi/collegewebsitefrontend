import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../../../AdminTable.css';

const AdminRtiTable = () => {
  const [rtiFiles, setRtiFiles] = useState([]);
  const [editing, setEditing] = useState(null);  // State for tracking the file being edited
  const [editedData, setEditedData] = useState({});  // State for holding the edited data
  const [loading, setLoading] = useState(true);  // State for loading indicator
  const [error, setError] = useState(null);      // State for error handling

  useEffect(() => {
    axios.get('http://localhost:8080/api/rti')
      .then(response => {
        console.log('Fetched RTI Files:', response.data);  // Check if data is being received
        setRtiFiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the RTI Files:', error);
        setError('Failed to fetch RTI files');
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    setEditing(id);
    const fileToEdit = rtiFiles.find(file => file.rtiId === id);
    setEditedData(fileToEdit || {});  // Set the file data to the editing state
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8080/api/rti/${id}`, editedData)
      .then(() => {
        // Update local state after save
        setRtiFiles(prevFiles => prevFiles.map(file => (file.rtiId === id ? editedData : file)));
        setEditing(null);
      })
      .catch(error => {
        console.error('Error saving the RTI file:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/rti/${id}`)
      .then(() => {
        setRtiFiles(prevFiles => prevFiles.filter(file => file.rtiId !== id));
      })
      .catch(error => {
        console.error('Error deleting the RTI file:', error);
      });
  };

  const handleView = (rtiLink) => {
    const newWindow = window.open(rtiLink, '_blank');
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

  // Show loading or error state
  if (loading) {
    return <div>Loading RTI files...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (rtiFiles.length === 0) {
    return <div>No RTI files available</div>;
  }

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h1>RTI Files</h1>
      <table className="aicte-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>RTI Year</th>
            <th>RTI File</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rtiFiles.map((file, index) => (
            <tr key={file.rtiId}>
              <td>{index + 1}</td>
              <td>
                {editing === file.rtiId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="rtiYear"
                    value={editedData.rtiYear || ''}
                    onChange={handleChange}
                  />
                ) : (
                  file.rtiYear
                )}
              </td>
              <td>
                {editing === file.rtiId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="rtiLink"
                    value={editedData.rtiLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <button
                    className="action-button view-button"
                    onClick={() => handleView(file.rtiLink)}
                  >
                    View
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(file.rtiLink)}
                >
                  Download
                </button>
              </td>
              <td>
                {editing === file.rtiId ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(file.rtiId)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(file.rtiId)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(file.rtiId)}
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

export default AdminRtiTable;
