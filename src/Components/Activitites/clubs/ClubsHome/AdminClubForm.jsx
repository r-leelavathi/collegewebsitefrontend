import React from 'react'

import React, { useState } from 'react';
import axios from 'axios';
import './ClubForm.css';

const AdminClubForm = () => {
  const [clubDetails, setClubDetails] = useState({
    clubName: '',
    clubIncharge: '',
    clubInchargeDepartment: '',
    clubInchargeDesigntion: '',
    clubInchargePhoneNumer: '',
    clubInchargeEmail: '',
    clubInchargeImageLink: ''
  });

  const [clubInchargePhoto, setClubInchargePhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubDetails({
      ...clubDetails,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setClubInchargePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("clubInchargePhoto", clubInchargePhoto); // Uploading photo
    formData.append(
      "clubDetails",
      new Blob([JSON.stringify(clubDetails)], { type: "application/json" })
    );

    try {
      const response = await axios.post('http://localhost:8080/api/club_details', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Club details submitted successfully:', response.data);
      setClubDetails({
        clubName: '',
        clubIncharge: '',
        clubInchargeDepartment: '',
        clubInchargeDesigntion: '',
        clubInchargePhoneNumer: '',
        clubInchargeEmail: '',
        clubInchargeImageLink: ''
      });
      setClubInchargePhoto(null);
    } catch (error) {
      console.error('Error submitting club details:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="club-form-container">
      <h2>Add New Club Details</h2>
      <form onSubmit={handleSubmit} className="club-form">
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
          <label htmlFor="clubInchargeDepartment">Incharge Department</label>
          <input
            type="text"
            id="clubInchargeDepartment"
            name="clubInchargeDepartment"
            value={clubDetails.clubInchargeDepartment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargeDesigntion">Incharge Designation</label>
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
          <label htmlFor="clubInchargePhoneNumer">Incharge Phone Number</label>
          <input
            type="tel"
            id="clubInchargePhoneNumer"
            name="clubInchargePhoneNumer"
            value={clubDetails.clubInchargePhoneNumer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargeEmail">Incharge Email</label>
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
          <label htmlFor="clubInchargeImageLink">Incharge Image Link</label>
          <input
            type="url"
            id="clubInchargeImageLink"
            name="clubInchargeImageLink"
            value={clubDetails.clubInchargeImageLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="clubInchargePhoto">Upload Incharge Photo</label>
          <input
            type="file"
            id="clubInchargePhoto"
            name="clubInchargePhoto"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminClubForm
