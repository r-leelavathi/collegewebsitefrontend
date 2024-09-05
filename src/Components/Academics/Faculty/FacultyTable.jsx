import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FacultyTable.css';

const FacultyTable = () => {
  const [faculties, setFaculties] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    facultyName: '',
    facultyDesignation: '',
    facultyPhone: '',
    facultyEmail: '',
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/faculties')
      .then(response => {
        setFaculties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the faculty data!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/faculties/${id}`)
      .then(() => {
        setFaculties(faculties.filter(faculty => faculty.facultyId !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the faculty!', error);
      });
  };

  const handleEdit = (faculty) => {
    setEditingId(faculty.facultyId);
    setFormData({
      facultyName: faculty.facultyName,
      facultyDesignation: faculty.facultyDesignation,
      facultyPhone: faculty.facultyPhone,
      facultyEmail: faculty.facultyEmail,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (id) => {
    axios.put(`http://localhost:8080/api/faculties/${id}`, formData)
      .then(response => {
        setFaculties(faculties.map(faculty =>
          faculty.facultyId === id ? response.data : faculty
        ));
        setEditingId(null);
      })
      .catch(error => {
        console.error('There was an error updating the faculty data!', error);
      });
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="faculty-table-container">
      <h2 className="table-heading">Faculty List</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Phone</th>
            <th>Mail</th>
            <th>More</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={faculty.facultyId}>
              <td>{index + 1}</td>
              <td>
                {editingId === faculty.facultyId ? (
                  <input
                    type="text"
                    name="facultyName"
                    value={formData.facultyName}
                    onChange={handleInputChange}
                  />
                ) : (
                  faculty.facultyName
                )}
              </td>
              <td>
                {editingId === faculty.facultyId ? (
                  <input
                    type="text"
                    name="facultyDesignation"
                    value={formData.facultyDesignation}
                    onChange={handleInputChange}
                  />
                ) : (
                  faculty.facultyDesignation
                )}
              </td>
              <td>
                {editingId === faculty.facultyId ? (
                  <input
                    type="text"
                    name="facultyPhone"
                    value={formData.facultyPhone}
                    onChange={handleInputChange}
                  />
                ) : (
                  faculty.facultyPhone
                )}
              </td>
              <td>
                {editingId === faculty.facultyId ? (
                  <input
                    type="email"
                    name="facultyEmail"
                    value={formData.facultyEmail}
                    onChange={handleInputChange}
                  />
                ) : (
                  faculty.facultyEmail
                )}
              </td>
              <td>
                <button
                  className="table-button more-button"
                  onClick={() => console.log('More details for:', faculty.facultyId)}
                >
                  More
                </button>
              </td>
              <td>
                {editingId === faculty.facultyId ? (
                  <>
                    <button
                      className="table-button save-button"
                      onClick={() => handleSave(faculty.facultyId)}
                    >
                      Save
                    </button>
                    <button
                      className="table-button cancel-button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="table-button update-button"
                    onClick={() => handleEdit(faculty)}
                  >
                    Update
                  </button>
                )}
              </td>
              <td>
                <button
                  className="table-button delete-button"
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

export default FacultyTable;
