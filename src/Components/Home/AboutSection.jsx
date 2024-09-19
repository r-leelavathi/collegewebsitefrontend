import React from 'react';
import './AboutSection.css';
import { Link } from 'react-router-dom';
const AboutSection = () => {

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/assets/clgimages/clgimg2.jpg" alt="College Image" />
        </div>

        <div className="about-text">
          <h2>About Our College</h2>
          <p>
            Karnataka (Govt.) Polytechnic, Mangalore (KPT) is the second-largest polytechnic in Karnataka, established in 1946. Known for its accessible education to the rural and economically weaker sections of the coastal Karnataka region, KPT is a prestigious institution run by the Government of Karnataka. The polytechnic is situated on a sprawling 19-acre campus in the heart of Mangalore, well connected by a network of roads.
          </p>
          <p>
            As a nodal polytechnic in the region, KPT coordinates the academic activities of five government polytechnics, four aided polytechnics, and five private polytechnics. It also serves as the admission center for polytechnics in Dakshina Kannada and Udupi districts. The polytechnic offers diploma engineering programs in eight branches, fostering a learning environment conducive to academic excellence and skill development. KPT has earned a reputation for producing highly skilled and disciplined diploma engineers, who are employed in various sectors across the state and country.
          </p>

          <Link to='/about/visionMission'>          <button className="about-more-button">
            More
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
