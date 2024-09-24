import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import './../../../AdminForm.css';

const AdminCircularForm = () => {
  const [circular, setCircular] = useState({
    date: '',
    description: '',
    imageLink: '' // Add the imageLink field
  });

  const navigate = useNavigate(); // Initialize navigate

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
      const response = await axios.post('http://localhost:8080/api/circulars/add', circular, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Circular added successfully:', response.data);
      setCircular({
        date: '',
        description: '',
        imageLink: '' // Reset imageLink as well
      });
    } catch (error) {
      console.error('Error adding circular:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">

      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Add New Circular</h2>
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

        <div className="form-group">
          <label htmlFor="imageLink">Paste Image Link</label>
          <input
            type="text"
            id="imageLink"
            name="imageLink"
            value={circular.imageLink}
            onChange={handleChange}
            placeholder="Paste image URL here"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminCircularForm;
