import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminFacultyTable = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/faculties');
      setFacultyData(response.data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const facultyMember = facultyData.find(f => f.facultyId === id);
    setEditedData({ ...facultyMember });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/faculties/delete/faculty/${id}`);
      setFacultyData(facultyData.filter(f => f.facultyId !== id));
    } catch (error) {
      console.error('Error deleting faculty member:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/faculties/faculty/${id}`, editedData);
      setEditing(null);
      fetchFaculty(); // Refresh the data
    } catch (error) {
      console.error('Error saving faculty member:', error);
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
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Faculty Members</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, index) => (
            <tr key={faculty.facultyId}>
              <td>{index + 1}</td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    name="facultyName"
                    value={editedData.facultyName || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyName
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyDesignation"
                    value={editedData.facultyDesignation || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyDesignation
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyDepartment"
                    value={editedData.facultyDepartment || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyDepartment
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyLocation"
                    value={editedData.facultyLocation || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyLocation
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyPhone"
                    value={editedData.facultyPhone || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyPhone
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="email"
                    className="edit-mode"
                    name="facultyEmail"
                    value={editedData.facultyEmail || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyEmail
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyAddress"
                    value={editedData.facultyAddress || ''}
                    onChange={handleChange}
                  />
                ) : (
                  faculty.facultyAddress
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="facultyLink"
                    value={editedData.facultyLink || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={faculty.facultyLink} target="_blank" rel="noopener noreferrer">View Link</a>
                )}
              </td>
              <td>
                {editing === faculty.facultyId ? (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-save-button"
                    onClick={() => handleSave(faculty.facultyId)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="admin-edit-table-action-button admin-edit-table-edit-button"
                    onClick={() => handleEdit(faculty.facultyId)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="admin-edit-table-action-button admin-edit-table-delete-button"
                  onClick={() => handleDelete(faculty.facultyId)}
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

export default AdminFacultyTable;
