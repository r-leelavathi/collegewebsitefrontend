import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminResearchAndPublicationsTable = () => {
  const [publications, setPublications] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  // Fetch all research publications from the backend
  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/publications');
      setPublications(response.data);
    } catch (error) {
      console.error('There was an error fetching the publications!', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const publication = publications.find(p => p.researchPublicationSlNo === id);
    setEditedData({ ...publication });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/publications/delete/${id}`);
      setPublications(publications.filter(p => p.researchPublicationSlNo !== id));
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/publications/${id}`, editedData);
      setEditing(null);
      fetchPublications();
    } catch (error) {
      console.error('Error saving publication:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <div className='admin-edit-table-container'>
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Research Publications</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Department</th>
            <th>Title</th>
            <th>Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication, index) => (
            <tr key={publication.researchPublicationSlNo}>
              <td>{index + 1}</td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <input
                    type="date"
                    className="edit-mode"
                    name="researchPublicationDate"
                    value={editedData.researchPublicationDate || ''}
                    onChange={handleChange}
                  />
                ) : (
                  publication.researchPublicationDate
                )}
              </td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="researchPublicationName"
                    value={editedData.researchPublicationName || ''}
                    onChange={handleChange}
                  />
                ) : (
                  publication.researchPublicationName
                )}
              </td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="researchPublicationDepartment"
                    value={editedData.researchPublicationDepartment || ''}
                    onChange={handleChange}
                  />
                ) : (
                  publication.researchPublicationDepartment
                )}
              </td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="researchPublicationTitle"
                    value={editedData.researchPublicationTitle || ''}
                    onChange={handleChange}
                  />
                ) : (
                  publication.researchPublicationTitle
                )}
              </td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="researchPublicationLink"
                    value={editedData.researchPublicationLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={publication.researchPublicationLink} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                )}
              </td>
              <td>
                {editing === publication.researchPublicationSlNo ? (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-save-button"
                    onClick={() => handleSave(publication.researchPublicationSlNo)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-edit-button"
                    onClick={() => handleEdit(publication.researchPublicationSlNo)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-delete-button"
                  onClick={() => handleDelete(publication.researchPublicationSlNo)}
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

export default AdminResearchAndPublicationsTable
