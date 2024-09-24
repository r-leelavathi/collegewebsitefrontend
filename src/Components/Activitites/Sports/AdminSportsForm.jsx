import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './../../../AdminForm.css';

const AdminSportsForm = () => {
  const [circular, setCircular] = useState({
    date: '',
    topic: '',
    description: '',
    link: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCircular({
      ...circular,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/sportclub', circular);
      console.log('Circular added successfully:', response.data);
      setCircular({
        date: '',
        topic: '',
        description: '',
        link: '',
      });
    } catch (error) {
      console.error('Error adding circular:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Add New Sports Activity</h2>
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
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={circular.topic}
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

        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={circular.link}
            onChange={handleChange}
            placeholder="Event Link"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminSportsForm;
