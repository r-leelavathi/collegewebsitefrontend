import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminPublicInformationOfficer = () => {
  const [officer, setOfficer] = useState({
    name: "",
    designation: "",
    rtiDesignation: "",
    phoneNo: "",
    email: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfficer({
      ...officer,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/public-information-officers', officer, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Public Information Officer added successfully:', response.data);
      // Reset form fields after submission
      setOfficer({
        name: "",
        designation: "",
        rtiDesignation: "",
        phoneNo: "",
        email: "",
        address: ""
      });
    } catch (error) {
      console.error('Error adding officer:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Public Information Officer</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={officer.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={officer.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rtiDesignation">RTI Designation</label>
          <input
            type="text"
            id="rtiDesignation"
            name="rtiDesignation"
            value={officer.rtiDesignation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={officer.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={officer.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={officer.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminPublicInformationOfficer;
