import React, { useState } from 'react';
import axios from 'axios';
import './CircularForm.css';

const CircularForm = () => {
  const [circular, setCircular] = useState({
    date: " ",
    description: " "
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCircular({
      ...circular,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("imageFile", image);
    formdata.append(
      "circular", new Blob([JSON.stringify(circular)], { type: "application/json" })
    );

    try {
      console.log(circular)
      const response = await axios.post('http://localhost:8080/api/circulars/add', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Circular added successfully:', response.data);
      setCircular({
        date: '',
        description: '',
        imageFile: null,
      });
    } catch (error) {
      console.error('Error adding circular:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="circular-form-container">
      <h2>Add New Circular</h2>
      <form onSubmit={handleSubmit} className="circular-form">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={circular.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={circular.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageFile">Upload Circular Image</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
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

export default CircularForm;
