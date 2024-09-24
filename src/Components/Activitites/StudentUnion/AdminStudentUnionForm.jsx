import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './../../../AdminForm.css';

const AdminStudentUnionForm = () => {
  const [coordinator, setCoordinator] = useState({
    studentWelfareCoordinatorName: '',
    studentWelfareCoordinatorBranch: '',
    studentWelfareCoordinatorYear: '',
    studentWelfareCoordinatorRole: '',
    studentWelfareCoordinatorEmail: '',
    studentWelfareCoordinatorPhone: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoordinator({
      ...coordinator,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/studentwelfarecoordinator', coordinator);
      console.log('Coordinator added successfully:', response.data);
      setCoordinator({
        studentWelfareCoordinatorName: '',
        studentWelfareCoordinatorBranch: '',
        studentWelfareCoordinatorYear: '',
        studentWelfareCoordinatorRole: '',
        studentWelfareCoordinatorEmail: '',
        studentWelfareCoordinatorPhone: '',
      });
    } catch (error) {
      console.error('Error adding coordinator:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Add New Student Welfare Coordinator</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorName">Name</label>
          <input
            type="text"
            id="studentWelfareCoordinatorName"
            name="studentWelfareCoordinatorName"
            value={coordinator.studentWelfareCoordinatorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorBranch">Branch</label>
          <input
            type="text"
            id="studentWelfareCoordinatorBranch"
            name="studentWelfareCoordinatorBranch"
            value={coordinator.studentWelfareCoordinatorBranch}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorYear">Year</label>
          <input
            type="number"
            id="studentWelfareCoordinatorYear"
            name="studentWelfareCoordinatorYear"
            value={coordinator.studentWelfareCoordinatorYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorRole">Role</label>
          <input
            type="text"
            id="studentWelfareCoordinatorRole"
            name="studentWelfareCoordinatorRole"
            value={coordinator.studentWelfareCoordinatorRole}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorEmail">Email</label>
          <input
            type="email"
            id="studentWelfareCoordinatorEmail"
            name="studentWelfareCoordinatorEmail"
            value={coordinator.studentWelfareCoordinatorEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentWelfareCoordinatorPhone">Phone</label>
          <input
            type="tel"
            id="studentWelfareCoordinatorPhone"
            name="studentWelfareCoordinatorPhone"
            value={coordinator.studentWelfareCoordinatorPhone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminStudentUnionForm;
