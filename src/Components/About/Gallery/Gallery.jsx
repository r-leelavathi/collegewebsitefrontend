import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Convert Google Drive link to a direct link
  const getDirectDriveLink = (googleDriveLink) => {
    if (typeof googleDriveLink === 'string') {
      const fileIdMatch = googleDriveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return googleDriveLink;
  };


  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/gallery-images/all');
        setImages(response.data);
        setLoading(false); // Set loading to false once images are fetched
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchImages();
  }, []);

  // Function to open the image in a lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="page-title">Gallery</h1>

      {loading ? (
        <p className="loading-message">Loading images, please wait...</p> // Display loading message
      ) : (
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
              <iframe
                src={getDirectDriveLink(image.imageUrl)}
                title={`Gallery Image ${index + 1}`}
                className="gallery-iframe"
                allowFullScreen
              />
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <p className="image-date">{new Date(image.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox for viewing selected image */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <iframe
            src={getDirectDriveLink(selectedImage.imageUrl)}
            title="Selected"
            className="lightbox-iframe"
            allowFullScreen
          />
          <div className="lightbox-info">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
            <p className="image-date">{new Date(selectedImage.date).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
