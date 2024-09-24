import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminTelephoneDirectoryForm = () => {
  const [directoryEntry, setDirectoryEntry] = useState({
    designation: "",
    nameOfPerson: "",
    contactNumber: "",
    mailId: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDirectoryEntry({
      ...directoryEntry,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/telephone-directory/add', directoryEntry, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Telephone Directory entry added successfully:', response.data);
      // Reset form fields after submission
      setDirectoryEntry({
        designation: "",
        nameOfPerson: "",
        contactNumber: "",
        mailId: ""
      });
    } catch (error) {
      console.error('Error adding telephone directory entry:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Telephone Directory Entry</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={directoryEntry.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nameOfPerson">Name of Person</label>
          <input
            type="text"
            id="nameOfPerson"
            name="nameOfPerson"
            value={directoryEntry.nameOfPerson}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={directoryEntry.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mailId">Mail ID</label>
          <input
            type="email"
            id="mailId"
            name="mailId"
            value={directoryEntry.mailId}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminTelephoneDirectoryForm;
