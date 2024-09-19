import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminAICTETable = () => {
  const [aicteFiles, setAicteFiles] = useState([]);
  const [editing, setEditing] = useState(null); // Track the file being edited
  const [editedData, setEditedData] = useState({}); // Hold the edited data

  useEffect(() => {
    axios.get('http://localhost:8013/api/aicte') // Ensure your backend endpoint is correct
      .then(response => {
        setAicteFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (id) => {
    setEditing(id);
    const fileToEdit = aicteFiles.find(file => file.aicteId === id);
    setEditedData(fileToEdit || {}); // Set the file data for editing
  };

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (id) => {
    // Implement the save logic with axios to update the backend
    axios.put(`http://localhost:8013/api/aicte/${id}`, editedData)
      .then(() => {
        setAicteFiles(prevFiles => prevFiles.map(file =>
          file.aicteId === id ? { ...file, ...editedData } : file
        ));
        setEditing(null);
      })
      .catch(error => {
        console.error('Error updating the file:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8013/api/aicte/${id}`)
      .then(() => {
        setAicteFiles(prevFiles => prevFiles.filter(file => file.aicteId !== id));
      })
      .catch(error => {
        console.error('Error deleting the file:', error);
      });
  };

  const handleView = (id) => {
    console.log(`View AICTE file with id: ${id}`);
    // Add logic for viewing the AICTE file
  };

  const handleDownload = (id) => {
    console.log(`Download AICTE file with id: ${id}`);
    // Add logic for downloading the AICTE file
  };

  return (
    <div className="admin-edit-table-container"><Link
      to="/loginhome" className="back-button">Back to Login</Link>
      <h2 className="aicte-heading">AICTE Files</h2>
      <p className="aicte-description">
        The All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education under the Department of Higher Education, Ministry of Human Resource Development. It gives approvals for every program in every year. The Extension of Approval (EOA) letters are listed here.
      </p>

      <table className="aicte-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Year</th>
            <th>Extension of Approval</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {aicteFiles.map((file, index) => (
            <tr key={file.aicteId}>
              <td>{index + 1}</td>
              <td>
                {editing === file.aicteId ? (
                  <input
                    type="text"
                    name="aicteYear"
                    value={editedData.aicteYear || ''}
                    onChange={handleChange}
                  />
                ) : (
                  file.aicteYear
                )}
              </td>
              <td>
                {editing === file.aicteId ? (
                  <input
                    type="text"
                    name="aicteLink"
                    value={editedData.aicteLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={file.aicteLink} target="_blank" rel="noopener noreferrer">View Document</a>
                )}
              </td>
              <td>
                {editing === file.aicteId ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(file.aicteId)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEdit(file.aicteId)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button delete-button"
                      onClick={() => handleDelete(file.aicteId)}
                    >
                      Delete
                    </button>
                    <button
                      className="action-button view-button"
                      onClick={() => handleView(file.aicteId)}
                    >
                      View
                    </button>
                    <button
                      className="action-button download-button"
                      onClick={() => handleDownload(file.aicteId)}
                    >
                      Download
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAICTETable;
