import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminDepartmentalActivitiesForm = () => {
  const [activity, setActivity] = useState({
    Department: "",
    Date: "",
    Description: "",
    ImageLink: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/departmental-activities/add', activity, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Departmental Activity added successfully:', response.data);
      // Reset form fields after submission
      setActivity({
        Department: "",
        Date: "",
        Description: "",
        ImageLink: ""
      });
    } catch (error) {
      console.error('Error adding departmental activity:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Departmental Activity</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="Department">Department</label>
          <input
            type="text"
            id="Department"
            name="Department"
            value={activity.Department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            id="Date"
            name="Date"
            value={activity.Date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <textarea
            id="Description"
            name="Description"
            value={activity.Description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ImageLink">Image Link</label>
          <input
            type="url"
            id="ImageLink"
            name="ImageLink"
            value={activity.ImageLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminDepartmentalActivitiesForm;
