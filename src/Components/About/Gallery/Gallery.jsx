import React, { useState } from 'react';
import './Gallery.css';

// Array of ground URLs
const images = [
  '/assets/gallery/ground1.jpg',
  '/assets/gallery/ground2.jpg',
  '/assets/gallery/ground3.jpg',
  '/assets/gallery/ground1.jpg',
  '/assets/gallery/ground2.jpg',
  '/assets/gallery/ground3.jpg',
  '/assets/gallery/ground1.jpg',
  '/assets/gallery/ground2.jpg',
  '/assets/gallery/ground3.jpg',
  '/assets/gallery/ground1.jpg',
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {/* Lightbox for viewing selected image */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Selected" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
