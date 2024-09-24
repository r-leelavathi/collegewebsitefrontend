import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminAICTETable = () => {
  const [aicteFiles, setAicteFiles] = useState([]);
  const [editing, setEditing] = useState(null); // Track the file being edited
  const [editedData, setEditedData] = useState({}); // Hold the edited data

  useEffect(() => {
    axios.get('http://localhost:8080/api/aicte/all') // Ensure your backend endpoint is correct
      .then(response => {

        console.log(response.data);
        setAicteFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEdit = (id) => {
    setEditing(id);
    const fileToEdit = aicteFiles.find(file => file.id === id);
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
    axios.put(`http://localhost:8080/api/aicte/update/${id}`, editedData)
      .then(() => {
        setAicteFiles(prevFiles => prevFiles.map(file =>
          file.id === id ? { ...file, ...editedData } : file
        ));
        setEditing(null);
      })
      .catch(error => {
        console.error('Error updating the file:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/aicte/delete/${id}`)
      .then(() => {
        setAicteFiles(prevFiles => prevFiles.filter(file => file.id !== id));
      })
      .catch(error => {
        console.error('Error deleting the file:', error);
      });
  };


  const handleView = (imageLink) => {
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
  return (
    <div className="admin-edit-table-container"><Link
      to="/loginhome" className="back-button">Back to Login</Link>
      <h2 className="aicte-heading">AICTE Files</h2>
      <table className="aicte-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Year</th>
            <th>EOA</th>
            <th>Download</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {aicteFiles.map((file, index) => (
            <tr key={file.id}>
              <td>{index + 1}</td>
              <td>
                {editing === file.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="year"
                    value={editedData.year || ''}
                    onChange={handleChange}
                  />
                ) : (
                  file.year
                )}
              </td>
              <td>
                {editing === file.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="link"
                    value={editedData.link || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={file.link} target="_blank" rel="noopener noreferrer"
                    className="action-button view-button">View</a>
                )}
              </td>
              <td>
                <button
                  className="action-button download-button"
                  onClick={() => handleDownload(file.link)}
                >
                  Download
                </button></td>
              <td>
                {editing === file.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(file.id)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEdit(file.id)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(file.id)}
                >
                  Delete
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAICTETable;
