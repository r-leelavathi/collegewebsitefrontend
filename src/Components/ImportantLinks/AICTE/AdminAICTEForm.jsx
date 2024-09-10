import React, { useState } from 'react';
import axios from 'axios';
// import './App.css'; 

function AdminAICTEForm() {
  const [formData, setFormData] = useState({
    aicteYear: '',
    aicteLink: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8013/api/aicte', formData)
      .then((response) => {
        console.log('AICTE file created:', response.data);
        // Optionally reset the form after successful submission
        setFormData({ aicteYear: '', aicteLink: '' });
      })
      .catch((error) => {
        console.error('Error creating AICTE file:', error);
      });
  };

  return (
    <div className="App">
      <h2>Add AICTE File</h2>
      <form onSubmit={handleSubmit} className="aicte-form">
        <div className="form-group">
          <label>AICTE Year:</label>
          <input
            type="text"
            name="aicteYear"
            value={formData.aicteYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>AICTE Link:</label>
          <input
            type="url"
            name="aicteLink"
            value={formData.aicteLink}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add File</button>
      </form>
    </div>
  );
}


export default AdminAICTEForm
