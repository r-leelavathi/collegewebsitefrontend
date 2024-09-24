import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../AdminForm.css';

const AdminUpcomingEventsForm = () => {
  const [circular, setCircular] = useState({
    date: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCircular({
      ...circular,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(circular);
      const response = await axios.post('http://localhost:8080/api/upcoming-events/add', circular, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Upcoming Event added successfully:', response.data);
      setCircular({
        date: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding upcoming event:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Add Upcoming Events Details</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={circular.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={circular.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminUpcomingEventsForm;
