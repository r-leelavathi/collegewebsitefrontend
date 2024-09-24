import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminFormerPrincipals = () => {
  const [principal, setPrincipal] = useState({
    Name: "",
    Qualification: "",
    Duration: "",
    ImageLink: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrincipal({
      ...principal,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/former-principals/add', principal, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Former Principal added successfully:', response.data);
      // Reset form fields after submission
      setPrincipal({
        Name: "",
        Qualification: "",
        Duration: "",
        ImageLink: ""
      });
    } catch (error) {
      console.error('Error adding former principal:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Former Principal</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={principal.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Qualification">Qualification</label>
          <input
            type="text"
            id="Qualification"
            name="Qualification"
            value={principal.Qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Duration">Duration</label>
          <input
            type="text"
            id="Duration"
            name="Duration"
            value={principal.Duration}
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
            value={principal.ImageLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminFormerPrincipals;
