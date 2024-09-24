import React, { useState } from 'react';
import './../LabDetails.css';

const LabDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState([0, 0, 0, 0]); // For each lab

  const labs = [
    {
      name: "Particulate Technology",
      description:
        "The Particulate Technology lab focuses on the study of particle size distribution, separation techniques, and fluidization processes. Students will gain hands-on knowledge of various equipment and methods used to process and manage fine particles in industrial applications. The lab also emphasizes the importance of particle behavior in fluid systems, surface charge measurement, and dust collection technologies, essential for various chemical engineering operations.",
      equipment: "Sieve shaker, particle size analyzer, vibrating screen, cyclone separator, bag filter, sedimentation tank, fluidized bed, electrostatic precipitator, powder feeder, zeta potential analyzer, granulator, comminution equipment, dust collector.",
      images: [
        "/assets/department/CH/chemistrylab/1.jpg",
        "/assets/department/CH/chemistrylab/2.jpg",
        "/assets/department/CH/chemistrylab/3.jpg",
        "/assets/department/CH/chemistrylab/4.jpg",
      ],
    },
    {
      name: "Chemistry Laboratory",
      description:
        "The lab provides hands-on experience in conducting various experiments related to chemical reactions, analytical techniques, and material properties. The practical experience is designed to complement theoretical learning, enabling students to grasp key concepts in chemical processes and industrial applications.",
      equipment: "With a focus on safety and precision, students are trained to operate advanced equipment such as titration setups, pH meters, conductivity meters, and spectrophotometers.",
      images: [
        "/assets/department/CH/heattransfer/1.jpg",
        "/assets/department/CH/heattransfer/2.jpg",
        "/assets/department/CH/heattransfer/3.jpg",
        "/assets/department/CH/heattransfer/4.jpg",
        "/assets/department/CH/heattransfer/5.jpg",
        "/assets/department/CH/heattransfer/6.jpg",
      ],
    },
    {
      name: "Heat Transfer",
      description:
        "This lab helps students to gain a deep understanding of the behavior of heat in different materials and systems, essential for industrial applications in chemical engineering, such as designing efficient thermal equipment and managing energy transfer processes in chemical plants.",
      equipment: "The lab is equipped with various apparatus such as heat exchangers, thermal conductivity units, and convection setups, allowing students to perform experiments and observe heat transfer phenomena in real-time.",
      images: [
        "/assets/department/CH/momentumtransfer/1.jpg",
        "/assets/department/CH/momentumtransfer/2.jpg",
        "/assets/department/CH/momentumtransfer/3.jpg",
        "/assets/department/CH/momentumtransfer/4.jpg",
        "/assets/department/CH/momentumtransfer/5.jpg",
        "/assets/department/CH/momentumtransfer/6.jpg",
      ],
    },
    {
      name: "Momentum Transfer",
      description:
        "This lab provides students with hands-on experience in understanding key concepts such as fluid flow, pressure drop, and velocity profiles.",
      equipment: "Equipped with devices like venturimeters, orificemeters, pitot tubes, and packed bed columns, the lab enables students to explore fluid behavior in different conditions.",
      images: [
        "/assets/department/CH/particulatetechnology/1.jpg",
        "/assets/department/CH/particulatetechnology/2.jpg",
        "/assets/department/CH/particulatetechnology/3.jpg",
        "/assets/department/CH/particulatetechnology/4.jpg",
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

export default LabDetails;
