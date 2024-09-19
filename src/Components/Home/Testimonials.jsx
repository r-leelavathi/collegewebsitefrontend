import React, { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    { id: 1, name: 'Alice Johnson', image: 'path_to_image1.jpg', text: 'KPT Mangalore has been a transformative experience for me. The support from faculty is unparalleled.', department: 'Computer Science', year: '2024' },
    { id: 2, name: 'Bob Smith', image: 'path_to_image2.jpg', text: 'The clubs and activities here have really enriched my college life. Highly recommend to all students!', department: 'Mechanical Engineering', year: '2024' },
    { id: 3, name: 'Charlie Brown', image: 'path_to_image3.jpg', text: 'The learning environment at KPT is top-notch. The practical approach really prepares us for real-world challenges.', department: 'Electrical Engineering', year: '2024' },
  ];

  return (
    <section className="testimonials">
      <h2>Student Testimonials</h2>
      <div className="carousel-container">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={() => scroll('left')}>
          &lt;
        </button>

        {/* Testimonial Cards */}
        <div className="testimonial-scroll" ref={scrollRef}>
          <div className="testimonial-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-content">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-details">{testimonial.department} - {testimonial.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={() => scroll('right')}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
