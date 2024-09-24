import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './../../../AdminForm.css';

const AdminNCCForm = () => {
  const [nccData, setNccData] = useState({
    date: '',
    topic: '',
    description: '',
    link: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNccData({
      ...nccData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(nccData);
      const response = await axios.post('http://localhost:8080/api/ncc', nccData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('NCC activity added successfully:', response.data);
      setNccData({
        date: '',
        topic: '',
        description: '',
        link: ''
      });
      navigate('/loginhome'); // Redirect after submission
    } catch (error) {
      console.error('Error adding activity:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">

      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Add New NCC Activity</h2>
      <form onSubmit={handleSubmit} className="admin-form">

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={nccData.date}
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
            value={nccData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={nccData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Image Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={nccData.link}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminNCCForm;
