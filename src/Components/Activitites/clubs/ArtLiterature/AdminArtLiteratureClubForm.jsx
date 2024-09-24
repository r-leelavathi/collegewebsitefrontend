import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../../AdminForm.css';

const AdminArtLiteratureClubForm = () => {
  const [artLiteratureData, setArtLiteratureData] = useState({
    date: '',
    topic: '',
    description: '',
    link: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtLiteratureData({
      ...artLiteratureData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(artLiteratureData);
      const response = await axios.post('http://localhost:8080/api/artliterature', artLiteratureData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Art, Literature & Culture activity added successfully:', response.data);
      setArtLiteratureData({
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

      <h2>Add New Art, Literature and Cultural Activity</h2>
      <form onSubmit={handleSubmit} className="admin-form">

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={artLiteratureData.date}
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
            value={artLiteratureData.topic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={artLiteratureData.description}
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
            value={artLiteratureData.link}
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

export default AdminArtLiteratureClubForm;
