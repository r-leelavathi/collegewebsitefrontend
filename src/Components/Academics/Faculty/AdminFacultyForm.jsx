import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminFacultyForm = () => {
  const [faculty, setFaculty] = useState({
    facultyName: "",
    facultyDesignation: "",
    facultyDepartment: "",
    facultyLocation: "",
    facultyPhone: "",
    facultyEmail: "",
    facultyAddress: "",
    facultyLink: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty({
      ...faculty,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/faculty/add', faculty, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Faculty added successfully:', response.data);
      // Reset form fields after submission
      setFaculty({
        facultyName: "",
        facultyDesignation: "",
        facultyDepartment: "",
        facultyLocation: "",
        facultyPhone: "",
        facultyEmail: "",
        facultyAddress: "",
        facultyLink: ""
      });
    } catch (error) {
      console.error('Error adding faculty:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="facultyName">Name</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={faculty.facultyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyDesignation">Designation</label>
          <input
            type="text"
            id="facultyDesignation"
            name="facultyDesignation"
            value={faculty.facultyDesignation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyDepartment">Department</label>
          <select
            id="facultyDepartment"
            name="facultyDepartment"
            value={faculty.facultyDepartment}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option> {/* Default placeholder */}
            <option value="Computer Science & Engineering">Computer Science & Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Polymer Technology">Polymer Technology</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</option>
            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
            <option value="Automobile Engineering">Automobile Engineering</option>
            <option value="Office Staff">Office Staff</option>
            <option value="Object Staff">Object Staff</option>
            <option value="Science & Humanities">Science & Humanities</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="facultyLocation">Location</label>
          <input
            type="text"
            id="facultyLocation"
            name="facultyLocation"
            value={faculty.facultyLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyPhone">Phone Number</label>
          <input
            type="tel"
            id="facultyPhone"
            name="facultyPhone"
            value={faculty.facultyPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyEmail">Email</label>
          <input
            type="email"
            id="facultyEmail"
            name="facultyEmail"
            value={faculty.facultyEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyAddress">Address</label>
          <input
            type="text"
            id="facultyAddress"
            name="facultyAddress"
            value={faculty.facultyAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="facultyLink">Profile Link</label>
          <input
            type="url"
            id="facultyLink"
            name="facultyLink"
            value={faculty.facultyLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminFacultyForm;
