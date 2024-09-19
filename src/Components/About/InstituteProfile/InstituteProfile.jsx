import React from 'react';
import './InstituteProfile.css';

const InstituteProfile = () => {
  return (
    <div className="profile_container">
      <div className="profile_content">
        <div className="profile_text">
          <h2>Institute Profile</h2>
          <p>
            Karnataka (Govt.) Polytechnic, Mangalore, established in 1946, is a government-run institution aimed at providing quality technical education to students, especially those from rural and economically weaker backgrounds. Located just 2 km from the heart of Mangaluru city, the polytechnic campus spans 19 acres and offers a conducive environment for both academic learning and personal growth.
          </p>
          <p>
            Currently, the polytechnic offers eight diploma engineering programs with an annual intake of over 1500 students. KPT is known for its strong focus on technical education, industry collaboration, and self-employment opportunities for its students. The institution has also earned recognition for its community development programs and numerous government-aided projects. Over the years, KPT has established itself as one of the top government diploma engineering institutions in Karnataka.
          </p>
        </div>
        <div className="profile_image">
          <img src="/assets/clgimages/clgimg1.jpg" alt="KPT Image" />
        </div>
      </div>
    </div>
  );
};

export default InstituteProfile;
