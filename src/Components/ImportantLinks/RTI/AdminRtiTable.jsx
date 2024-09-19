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
        // Remove file from state after successful deletion
        setRtiFiles(prevFiles => prevFiles.filter(file => file.rtiId !== id));
      })
      .catch(error => {
        console.error('Error deleting the RTI file:', error);
      });
  };

  const handleView = (id) => {
    console.log(`View RTI with id: ${id}`);
    // Additional logic for viewing can be added here
  };

  const handleDownload = (id) => {
    console.log(`Download RTI with id: ${id}`);
    // Additional logic for downloading can be added here
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
      <Link
        to="/loginhome" className="back-button">Back to Login</Link>

      <h1>RTI Files</h1>
      <p>
        The document 4(1) contains the following:
        <ol>
          <li>The particulars of its organisation, functions, and duties.</li>
          <li>The powers and duties of its officers and employees.</li>
          <li>The procedure followed in the decision-making process, including channels of supervision and accountability.</li>
          <li>The monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations.</li>
          <li>A directory of its officers and employees.</li>
          <li>The names, designations, and other particulars of the Public Information Officers.</li>
        </ol>
      </p>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>RTI Year</th>
            <th>RTI Link</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rtiFiles.map((file, index) => (
            <tr key={file.rtiId}>
              <td>{index + 1}</td>
              <td>{file.rtiYear}</td>
              <td><a href={file.rtiLink} target="_blank" rel="noopener noreferrer">View RTI</a></td>
              <td>
                {editing === file.rtiId ? (
                  <input
                    type="text"
                    name="description"
                    value={editedData.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  file.description
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-view-button"
                  onClick={() => handleView(file.rtiId)}
                >
                  View
                </button>
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-download-button"
                  onClick={() => handleDownload(file.rtiId)}
                >
                  Download
                </button>
              </td>
              <td>
                {editing === file.rtiId ? (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-save-button"
                    onClick={() => handleSave(file.rtiId)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-edit-button"
                    onClick={() => handleEdit(file.rtiId)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-delete-button"
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
