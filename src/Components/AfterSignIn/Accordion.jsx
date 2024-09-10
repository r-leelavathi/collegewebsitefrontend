import React, { useState } from 'react';
import './Accordion.css'; // Import the CSS file

const Accordion = ({ items }) => {
  // State to keep track of the currently active index
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle accordion click
  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            <h3>{item.title}</h3>
            <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>
              ➤
            </span>
          </div>
          <div
            className={`accordion-content ${activeIndex === index ? 'show' : ''
              }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
