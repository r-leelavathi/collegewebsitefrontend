import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminGalleryForm = () => {
  const [galleryImage, setGalleryImage] = useState({
    imageUrl: "",
    title: "",
    description: "",
    date: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGalleryImage({
      ...galleryImage,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/gallery-images/add', galleryImage, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Gallery Image added successfully:', response.data);
      // Reset form fields after submission
      setGalleryImage({
        imageUrl: "",
        title: "",
        description: "",
        date: ""
      });
    } catch (error) {
      console.error('Error adding gallery image:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add Gallery Image</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL (Google Drive Link)</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={galleryImage.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={galleryImage.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={galleryImage.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={galleryImage.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


export default AdminGalleryForm
