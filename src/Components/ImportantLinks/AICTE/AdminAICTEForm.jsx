import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminAICTEForm = () => {
  const [aicteData, setAicteData] = useState({
    year: "",
    link: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAicteData({
      ...aicteData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/aicte/add', aicteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('AICTE record added successfully:', response.data);
      setAicteData({
        year: '',
        link: ''
      });
      navigate('/loginHome'); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding AICTE record:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add AICTE Details</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={aicteData.year}
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
            value={aicteData.link}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminAICTEForm;
