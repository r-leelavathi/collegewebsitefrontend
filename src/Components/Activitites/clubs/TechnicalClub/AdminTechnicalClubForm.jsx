import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './../../../../AdminForm.css';

const AdminTechnicalClubForm = () => {
  const [technicalClubData, setTechnicalClubData] = useState({
    date: '',
    topic: '',
    description: '',
    link: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechnicalClubData({
      ...technicalClubData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(technicalClubData);
      const response = await axios.post('http://localhost:8080/api/technicalclub', technicalClubData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Technical club activity added successfully:', response.data);
      setTechnicalClubData({
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

      <h2>Add New Technical Activity</h2>
      <form onSubmit={handleSubmit} className="admin-form">

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={technicalClubData.date}
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
            value={technicalClubData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={technicalClubData.description}
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
            value={technicalClubData.link}
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

export default AdminTechnicalClubForm;
