import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminResearchPublicationForm = () => {
  const [publication, setPublication] = useState({
    researchPublicationDate: "",
    researchPublicationName: "",
    researchPublicationDepartment: "",
    researchPublicationTitle: "",
    researchPublicationLink: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublication({
      ...publication,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/research-publication/add', publication, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Research publication added successfully:', response.data);
      // Reset form fields after submission
      setPublication({
        researchPublicationDate: "",
        researchPublicationName: "",
        researchPublicationDepartment: "",
        researchPublicationTitle: "",
        researchPublicationLink: ""
      });
    } catch (error) {
      console.error('Error adding research publication:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Research Publication</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="researchPublicationDate">Date</label>
          <input
            type="date"
            id="researchPublicationDate"
            name="researchPublicationDate"
            value={publication.researchPublicationDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="researchPublicationName">Researcher Name</label>
          <input
            type="text"
            id="researchPublicationName"
            name="researchPublicationName"
            value={publication.researchPublicationName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="researchPublicationDepartment">Department</label>
          <input
            type="text"
            id="researchPublicationDepartment"
            name="researchPublicationDepartment"
            value={publication.researchPublicationDepartment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="researchPublicationTitle">Title</label>
          <input
            type="text"
            id="researchPublicationTitle"
            name="researchPublicationTitle"
            value={publication.researchPublicationTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="researchPublicationLink">Publication Link</label>
          <input
            type="url"
            id="researchPublicationLink"
            name="researchPublicationLink"
            value={publication.researchPublicationLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminResearchPublicationForm;
