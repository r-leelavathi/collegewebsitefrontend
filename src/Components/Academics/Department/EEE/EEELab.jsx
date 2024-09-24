import React, { useState } from 'react';
import './../LabDetails.css';

const EEELab = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState([0, 0, 0, 0]); // For each lab

  const labs = [
    {
      name: "Hardware and Networking Laboratory",
      description:
        "The Hardware and Networking Lab at our institution offers students hands-on experience in computer hardware and network configuration. Equipped with advanced tools and high-performance workstations, students can assemble and troubleshoot systems while learning to set up and manage networks using routers and switches. The lab also features the latest networking software, enabling students to gain skills in network security and troubleshooting. This practical environment prepares students for real-world challenges in the hardware and networking field.",
      equipment: "Computers.",
      images: [
        "/assets/department/EEE/5.jpg",
        "/assets/department/EEE/7.jpg",
        "/assets/department/EEE/8.jpg",
        "/assets/department/EEE/9.jpg",
        "/assets/department/EEE/10.jpg",
        "/assets/department/EEE/11.jpg",
        "/assets/department/EEE/12.jpg",
        "/assets/department/EEE/13.jpg",
      ],
    },
    {
      name: "Programming Laboratory",
      description:
        "The Computer Programming Lab offers state-of-the-art facilities for a comprehensive learning experience. Equipped with 32 high-end computers, the lab provides students with powerful resources for programming tasks. A high-quality projector enhances interactive lectures, while a reliable LAN switch ensures seamless internet access for research and collaboration. The air-conditioned environment promotes focus and productivity, and printer and scanner facilities facilitate easy document handling. This well-equipped lab fosters a conducive atmosphere for developing programming skills and hands-on learning.",
      equipment: "Computers",
      images: [
        "/assets/department/EEE/1.jpg",
        "/assets/department/EEE/2.jpg",
        "/assets/department/EEE/3.jpg",
        "/assets/department/EEE/4.jpg",
      ],
    },

  ];

  const handleNext = (index) => {
    setCurrentImageIndex((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        prevIndexes[index] === labs[index].images.length - 1 ? 0 : prevIndexes[index] + 1;
      return updatedIndexes;
    });
  };

  const handlePrev = (index) => {
    setCurrentImageIndex((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        prevIndexes[index] === 0 ? labs[index].images.length - 1 : prevIndexes[index] - 1;
      return updatedIndexes;
    });
  };

  return (
    <section className="cs-section cs-lab-details">
      <h2 className="cs-heading">Lab Details</h2>

      {labs.map((lab, index) => (
        <div className="cs-lab-wrapper" key={index}>
          {/* Left Side - Lab Description */}
          <div className="cs-lab-info">
            <h3 className="cs-lab-name">{lab.name}</h3>
            <p className="cs-lab-description">{lab.description}</p>
            <p className="cs-lab-equipment">
              <strong>Equipment:</strong> {lab.equipment}
            </p>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="cs-carousel">
            <div className="cs-carousel-wrapper">
              <button className="cs-carousel-btn" onClick={() => handlePrev(index)}>
                ◀
              </button>
              <img
                src={lab.images[currentImageIndex[index]]}
                alt={`Lab ${lab.name}`}
                className="cs-carousel-image"
              />
              <button className="cs-carousel-btn" onClick={() => handleNext(index)}>
                ▶
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EEELab
