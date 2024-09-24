import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminStudentunionTable = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [editing, setEditing] = useState(null); // Track the row being edited
  const [editedData, setEditedData] = useState({
    studentWelfareCoordinatorName: '',
    studentWelfareCoordinatorBranch: '',
    studentWelfareCoordinatorYear: '',
    studentWelfareCoordinatorRole: '',
    studentWelfareCoordinatorEmail: '',
    studentWelfareCoordinatorPhone: ''
  });

  useEffect(() => {
    fetchCoordinators();
  }, []);

  const fetchCoordinators = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/student-welfare-coordinators');
      setCoordinators(response.data);
    } catch (error) {
      console.error('Error fetching student welfare coordinators:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const coordinatorToEdit = coordinators.find((coordinator) => coordinator.studentWelfareCoordinatorId === id);
    setEditedData({
      studentWelfareCoordinatorName: coordinatorToEdit.studentWelfareCoordinatorName,
      studentWelfareCoordinatorBranch: coordinatorToEdit.studentWelfareCoordinatorBranch,
      studentWelfareCoordinatorYear: coordinatorToEdit.studentWelfareCoordinatorYear,
      studentWelfareCoordinatorRole: coordinatorToEdit.studentWelfareCoordinatorRole,
      studentWelfareCoordinatorEmail: coordinatorToEdit.studentWelfareCoordinatorEmail,
      studentWelfareCoordinatorPhone: coordinatorToEdit.studentWelfareCoordinatorPhone
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/student-welfare-coordinators/${id}`, editedData);
      fetchCoordinators(); // Refresh data after saving
      setEditing(null); // Exit edit mode
    } catch (error) {
      console.error('Error updating student welfare coordinator:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/student-welfare-coordinators/${id}`);
      fetchCoordinators(); // Refresh data after deleting
    } catch (error) {
      console.error('Error deleting student welfare coordinator:', error);
    }
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Student Welfare Coordinators</h2>

      <div className="coordinator_table-container">
        <table className="admin-edit-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {coordinators.map((coordinator) => (
              <tr key={coordinator.studentWelfareCoordinatorId}>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="studentWelfareCoordinatorName"
                      value={editedData.studentWelfareCoordinatorName}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorName
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="studentWelfareCoordinatorBranch"
                      value={editedData.studentWelfareCoordinatorBranch}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorBranch
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="number"
                      className="edit-mode"
                      name="studentWelfareCoordinatorYear"
                      value={editedData.studentWelfareCoordinatorYear}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorYear
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="studentWelfareCoordinatorRole"
                      value={editedData.studentWelfareCoordinatorRole}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorRole
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="email"
                      className="edit-mode"
                      name="studentWelfareCoordinatorEmail"
                      value={editedData.studentWelfareCoordinatorEmail}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorEmail
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <input
                      type="text"
                      className="edit-mode"
                      name="studentWelfareCoordinatorPhone"
                      value={editedData.studentWelfareCoordinatorPhone}
                      onChange={handleChange}
                    />
                  ) : (
                    coordinator.studentWelfareCoordinatorPhone
                  )}
                </td>
                <td>
                  {editing === coordinator.studentWelfareCoordinatorId ? (
                    <button className="action-button save-button" onClick={() => handleSave(coordinator.studentWelfareCoordinatorId)}>
                      Save
                    </button>
                  ) : (
                    <button className="action-button edit-button" onClick={() => handleEdit(coordinator.studentWelfareCoordinatorId)}>
                      Edit
                    </button>
                  )}
                </td>
                <td>
                  <button className="action-button delete-button" onClick={() => handleDelete(coordinator.studentWelfareCoordinatorId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AdminStudentunionTable
