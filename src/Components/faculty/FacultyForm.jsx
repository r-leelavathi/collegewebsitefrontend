import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FacultyForm.css';

const FacultyForm = ({ faculty, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    facultyName: '',
    facultyDesignation: '',
    facultyDepartment: '',
    facultyLocation: '',
    facultyPhone: '',
    facultyEmail: '',
    facultyAddress: '',
  });

  useEffect(() => {
    if (faculty) {
      setFormData({
        facultyName: faculty.facultyName || '',
        facultyDesignation: faculty.facultyDesignation || '',
        facultyDepartment: faculty.facultyDepartment || '',
        facultyLocation: faculty.facultyLocation || '',
        facultyPhone: faculty.facultyPhone || '',
        facultyEmail: faculty.facultyEmail || '',
        facultyAddress: faculty.facultyAddress || '',
      });
    }
  }, [faculty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = faculty
      ? axios.put(`http://localhost:8080/api/faculties/${faculty.facultyId}`, formData)
      : axios.post('http://localhost:8080/api/faculties', formData);

    request
      .then(response => {
        console.log('Faculty data submitted successfully:', response.data);
        onSuccess();
      })
      .catch(error => {
        console.error('There was an error submitting the faculty data:', error);
      });
  };

  return (
    <div className="faculty-form-container">
      <h2 className="form-heading">{faculty ? 'Update Faculty' : 'Add Faculty'}</h2>
      <form onSubmit={handleSubmit} className="faculty-form">
        <div className="form-group">
          <label htmlFor="facultyName">Name</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="facultyDesignation">Designation</label>
          <select
            id="facultyDesignation"
            name="facultyDesignation"
            value={formData.facultyDesignation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Designation</option>
            <option value="HOD">HOD</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Senior Scale Lecturer">Senior Scale Lecturer</option>
            <option value="Selection Grade Lecturer">Selection Grade Lecturer</option>
            <option value="Office Staff">Office Staff</option>
            <option value="Object Staffs">Object Staffs</option>
            <option value="Guest Faculty">Guest Faculty</option>
            <option value="Principal">Principal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="facultyDepartment">Department</label>
          <select
            id="facultyDepartment"
            name="facultyDepartment"
            value={formData.facultyDepartment}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Department</option>
            <option value="Automobile Engineering">Automobile Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Polymer Technology">Polymer Technology</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="facultyLocation">Location</label>
          <input
            type="text"
            id="facultyLocation"
            name="facultyLocation"
            value={formData.facultyLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="facultyPhone">Phone</label>
          <input
            type="tel"
            id="facultyPhone"
            name="facultyPhone"
            value={formData.facultyPhone}
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
            value={formData.facultyEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="facultyAddress">Address</label>
          <textarea
            id="facultyAddress"
            name="facultyAddress"
            value={formData.facultyAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            {faculty ? 'Update' : 'Submit'}
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;
