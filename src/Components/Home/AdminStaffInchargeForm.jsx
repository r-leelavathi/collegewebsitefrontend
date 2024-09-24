import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../AdminForm.css';

const AdminStaffInchargeForm = () => {
  const [clubDetails, setClubDetails] = useState({
    clubName: '',
    clubIncharge: '',
    clubInchargeDepartment: '',
    clubInchargeDesigntion: '',
    clubInchargePhoneNumer: '',
    clubInchargeEmail: '',
    clubInchargeImageLink: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubDetails({
      ...clubDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/club_details', clubDetails, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Club details added successfully:')
      console.log('Club details added successfully:', response.data);
      setClubDetails({
        clubName: '',
        clubIncharge: '',
        clubInchargeDepartment: '',
        clubInchargeDesigntion: '',
        clubInchargePhoneNumer: '',
        clubInchargeEmail: '',
        clubInchargeImageLink: '',
      });

      // navigate('/success'); // Navigate to a success page or wherever you want
    } catch (error) {
      console.error('Error adding club details:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Add New Club</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="clubName">Club Name</label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            value={clubDetails.clubName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubIncharge">Club Incharge</label>
          <input
            type="text"
            id="clubIncharge"
            name="clubIncharge"
            value={clubDetails.clubIncharge}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargeDepartment">Club Incharge Department</label>
          <select
            id="clubInchargeDepartment"
            name="clubInchargeDepartment"
            value={clubDetails.clubInchargeDepartment}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option> {/* Default placeholder */}
            <option value="Computer Science & Engineering">Computer Science & Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Polymer Technology">Polymer Technology</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</option>
            <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
            <option value="Automobile Engineering">Automobile Engineering</option>
            <option value="Office Staff">Office Staff</option>
            <option value="Object Staff">Object Staff</option>
            <option value="Science & Humanities">Science & Humanities</option>
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="clubInchargeDesigntion">Club Incharge Designation</label>
          <input
            type="text"
            id="clubInchargeDesigntion"
            name="clubInchargeDesigntion"
            value={clubDetails.clubInchargeDesigntion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargePhoneNumer">Club Incharge Phone Number</label>
          <input
            type="text"
            id="clubInchargePhoneNumer"
            name="clubInchargePhoneNumer"
            value={clubDetails.clubInchargePhoneNumer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargeEmail">Club Incharge Email</label>
          <input
            type="email"
            id="clubInchargeEmail"
            name="clubInchargeEmail"
            value={clubDetails.clubInchargeEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargeImageLink">Club Incharge Image Link</label>
          <input
            type="text"
            id="clubInchargeImageLink"
            name="clubInchargeImageLink"
            value={clubDetails.clubInchargeImageLink}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


export default AdminStaffInchargeForm;
