import React from 'react';
import './VisionMission.css'; // Make sure the CSS file is linked properly

const VisionMission = () => {
  return (
    <div className='visionmission-container'>
      {/* History Section */}
      <div className='visionmission-history'>
        <h1>History</h1>
        <p>
          Karnataka (Govt.) Polytechnic, Mangalore was established in 1946 under the Madras state government, initially operating out of a rented building in Pandeshwar. The polytechnic moved to its current campus in Kadri Hills, Mangalore, in 1954. Since then, it has grown into one of the leading polytechnic institutions in Karnataka, providing quality technical education to students from all over the region.
        </p>
        <p>
          The polytechnic started with four engineering diploma branches—Civil, Mechanical, Electrical, and Automobile. Over time, new branches like Chemical, Polymer Technology, Electronics and Communication, and Computer Science were added. Today, the institution is renowned for its role in shaping skilled technicians and engineers who contribute significantly to industry and society.
        </p>

        {/* Adding images in the history section */}
        <div className='visionmission-images'>
          <img src='/assets/clgimages/1946.jpg' alt='History Image 1' className='visionmission-image' />
          <img src='/assets/clgimages/1954.jpg' alt='History Image 2' className='visionmission-image' />
        </div>
      </div>

      {/* Vision Section */}
      <div className='visionmission-vision'>
        <h1>Vision</h1>
        <p>
          To impact quality technical education emphasizing on human values, spirit of innovation, and sustainable development of society.
        </p>
      </div>

      {/* Mission Section */}
      <div className='visionmission-mission'>
        <h1>Mission</h1>
        <ol>
          <li>Providing quality education and training to empower students as contributors to the sustainable development of society.</li>
          <li>Inculcating the spirit of innovation, ethical perspective, and professionalism by effective interaction with industries and entrepreneurs.</li>
          <li>Organizing co-curricular and extra-curricular activities to promote teamwork and all-around development of students.</li>
        </ol>
      </div>
    </div>
  );
};

export default VisionMission;
