import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css';

const AdminRtiForm = () => {
  const [rtiFile, setRtiFile] = useState({
    rtiYear: '',
    rtiLink: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRtiFile({
      ...rtiFile,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(rtiFile);
      const response = await axios.post('http://localhost:8080/api/rti', rtiFile, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('RTI File added successfully:', response.data);
      setRtiFile({
        rtiYear: '',
        rtiLink: ''
      });
      navigate('/loginhome');  // Redirect after successful submission
    } catch (error) {
      console.error('Error adding RTI File:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>

      <h2>Add New RTI File</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="rtiYear">RTI Year</label>
          <input
            type="text"
            id="rtiYear"
            name="rtiYear"
            value={rtiFile.rtiYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rtiLink">RTI Link</label>
          <input
            type="text"
            id="rtiLink"
            name="rtiLink"
            value={rtiFile.rtiLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminRtiForm;
