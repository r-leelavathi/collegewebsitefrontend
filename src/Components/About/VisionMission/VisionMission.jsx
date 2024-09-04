import React from 'react';
import './VisionMission.css'; // Make sure the CSS file is linked properly

const VisionMission = () => {
  return (
    <div className='visionMission_container'>
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
