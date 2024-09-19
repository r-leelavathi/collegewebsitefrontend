import React from 'react';
import './VisionMission.css'; // Make sure the CSS file is linked properly

const VisionMission = () => {
  return (
    <div className='visionMission_container'>
      <div className='visionMission_container-vision'>
        <h1>History</h1>
        <p>
          Karnataka (Govt.) Polytechnic, Mangalore was established in 1946 under the Madras state government, initially operating out of a rented building in Pandeshwar. The polytechnic moved to its current campus in Kadri Hills, Mangalore, in 1954. Since then, it has grown into one of the leading polytechnic institutions in Karnataka, providing quality technical education to students from all over the region.
        </p>
        <p>
          The polytechnic started with four engineering diploma branches—Civil, Mechanical, Electrical, and Automobile. Over time, new branches like Chemical, Polymer Technology, Electronics and Communication, and Computer Science were added. Today, the institution is renowned for its role in shaping skilled technicians and engineers who contribute significantly to industry and society.
        </p></div>
      <div className='visionMission_container-vision'>
        <h1>Vision</h1>
        <p>
          To impact quality technical education emphasizing on human values, spirit of innovation and sustainable development of the society.
        </p>
      </div>
      <div className='visionMission_container-mission'>
        <h1>Mission</h1>
        <ol>
          1. Providing quality education and training to empower students as contributors to the sustainable development of the society.
          <br />2. Inculcating the spirit of innovation, ethical perspective, and professionalism by effective interaction with industries and entrepreneurs.
          <br />3. Organizing co-curricular and extra-curricular activities to promote teamwork and all-around development of the students.
        </ol>
      </div>
    </div>
  );
};

export default VisionMission;
