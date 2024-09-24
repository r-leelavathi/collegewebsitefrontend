import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../../AdminTable.css';
import { Link } from 'react-router-dom';

const AdminGalleryTable = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/gallery-images/all');
      setGalleryImages(response.data);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
    const image = galleryImages.find(img => img.id === id);
    setEditedData({ ...image });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/gallery-images/delete/${id}`);
      setGalleryImages(galleryImages.filter(img => img.id !== id));
    } catch (error) {
      console.error('Error deleting gallery image:', error);
    }
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/gallery-images/update/${id}`, editedData);
      setEditing(null);
      fetchGalleryImages(); // Refresh the data
    } catch (error) {
      console.error('Error saving gallery image:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  return (
    <div className="admin-edit-table-container">
      <Link to="/loginhome" className="back-button">Back to Login</Link>
      <h2>Gallery Images</h2>
      <table className="admin-edit-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Image Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {galleryImages.map((image, index) => (
            <tr key={image.id}>
              <td>{index + 1}</td>
              <td>
                {editing === image.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="title"
                    value={editedData.title || ''}
                    onChange={handleChange}
                  />
                ) : (
                  image.title
                )}
              </td>
              <td>
                {editing === image.id ? (
                  <input
                    type="text"
                    className="edit-mode"
                    name="description"
                    value={editedData.description || ''}
                    onChange={handleChange}
                  />
                ) : (
                  image.description
                )}
              </td>
              <td>
                {editing === image.id ? (
                  <input
                    type="date"
                    className="edit-mode"
                    name="date"
                    value={editedData.date || ''}
                    onChange={handleChange}
                  />
                ) : (
                  image.date
                )}
              </td>
              <td>
                {editing === image.id ? (
                  <input
                    type="url"
                    className="edit-mode"
                    name="imageUrl"
                    value={editedData.imageUrl || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <a href={image.imageUrl} target="_blank" rel="noopener noreferrer">View Image</a>
                )}
              </td>
              <td>
                {editing === image.id ? (
                  <button
                    className="action-button save-button"
                    onClick={() => handleSave(image.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(image.id)}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => handleDelete(image.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminGalleryTable;
