import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './../../../AdminForm.css'; // Assuming you have a common CSS for forms

const AdminAICTEForm = () => {
  const [pressRelease, setPressRelease] = useState({
    pressReleaseDate: "",
    pressReleaseNewPaperName: "",
    pressReleaseDescription: ""
  });
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPressRelease({
      ...pressRelease,
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
      "pressRelease", new Blob([JSON.stringify(pressRelease)], { type: "application/json" })
    );

    try {
      const response = await axios.post('http://localhost:8080/api/pressreleases/add', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Press Release added successfully:', response.data);
      setPressRelease({
        pressReleaseDate: '',
        pressReleaseNewPaperName: '',
        pressReleaseDescription: ''
      });
      setImage(null);
    } catch (error) {
      console.error('Error adding press release:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="admin-form-container">
      {/* Back to Login Button */}
      <button className="back-button" onClick={() => navigate('/loginHome')}>
        Back to Login
      </button>

      <h2>Add AICTE Details</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="pressReleaseDate">Year</label>
          <input
            type="number"
            id="pressReleaseDate"
            name="pressReleaseDate"
            value={pressRelease.pressReleaseDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pressReleaseNewPaperName">Link of an Image</label>
          <input
            type="text"
            id="pressReleaseNewPaperName"
            name="pressReleaseNewPaperName"
            value={pressRelease.pressReleaseNewPaperName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};


export default AdminAICTEForm
