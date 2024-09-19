import React, { useEffect, useState } from "react";
import './AdmissionProcess.css'; // Using the same CSS file for consistent styling
import axios from "axios";

const ChangeOfBranch = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/circulars')
      .then(response => {
        setCirculars(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the circulars!", error);
      });
  }, []);

  return (
    <div className="admission-page">
      <h2 className="admission-title">Change of Branch (Programme) in 2nd Year Diploma</h2>

      <div className="admission-content">
        <div className="admission-text">
          <div className="admission-section">
            <h3 className="section-title">Guidelines for Change of Branch (Programme):</h3>
            <p className="section-subtitle">Eligibility Criteria:</p>
            <ul className="admission-list">
              <li>The change of branch (programme) is allowed in the 2nd year (3rd semester) of the Engineering Diploma programme under the following conditions.</li>
            </ul>
            <p className="section-subtitle">Conditions for Change of Branch:</p>
            <ul className="admission-list">
              <li>Students seeking a change of branch in the 2nd year (3rd semester) must pass all courses (subjects) of the 1st year (1st and 2nd semesters) of the diploma programme to which they were admitted.</li>
              <li>Students opting for a change of branch (programme) shall take bridge courses as mentioned in Annexure-2.</li>
              <li>The change of branch (programme) is allowed on a merit basis at the institution level and must be within the approved intake of the branch (programme).</li>
            </ul>
          </div>
        </div>

        <div className="admission-flowchart">
          <h3 className="flowchart-title">Change of Branch Process Flowchart</h3>
          <img src="/assets/flowcharts/changeofbranchprocess.jpg" alt="Change of Branch Process Flowchart" className="flowchart-image" />
        </div>
      </div>
    </div>
  );
};

export default ChangeOfBranch;
