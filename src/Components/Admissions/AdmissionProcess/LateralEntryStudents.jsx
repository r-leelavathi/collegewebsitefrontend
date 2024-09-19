import React, { useEffect, useState } from "react";
import './AdmissionProcess.css'; // Using the same CSS file as AdmissionProcess

const LateralEntryProcess = () => {

  return (
    <div className="admission-page">
      <h2 className="admission-title">Lateral Entry Admission Process</h2>

      <div className="admission-content">
        <div className="admission-text">
          <div className="admission-section">
            <h3 className="section-title">For Lateral Entry into Second Year/III Semester:</h3>
            <ul className="admission-list">
              <li>Passed 10+2 Examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology subject.</li>
              <li>OR</li>
              <li>Passed 10+2 Science (with Mathematics as one of the subjects) or 10+2 Science with Technical Vocational subject.</li>
              <li>OR</li>
              <li>10th + (2 years ITI) with appropriate Trade in that order shall be eligible for admission to second-year diploma courses of the appropriate programme.</li>
            </ul>
            <p className="section-subtitle">Bridge Courses:</p>
            <ul className="admission-list">
              <li>Such candidates admitted through lateral entry shall take bridge courses of the respective 1st year diploma programme as mentioned in the curriculum.</li>
            </ul>
            <p className="section-subtitle">Completion of Admission Formalities:</p>
            <ul className="admission-list">
              <li>Pay the required admission fee and complete any additional enrollment requirements as specified by the polytechnic.</li>
            </ul>
            <p className="section-subtitle">Orientation and Classes:</p>
            <ul className="admission-list">
              <li>Attend orientation (if offered) and start classes as scheduled.</li>
            </ul>
          </div>
        </div>

        <div className="admission-flowchart">
          <h3 className="flowchart-title">Lateral Entry Admission Process Flowchart</h3>
          <img src="/assets/flowcharts/admissionprocess.jpg" alt="Lateral Entry Admission Process Flowchart" className="flowchart-image" />
        </div>
      </div>
    </div>
  );
};

export default LateralEntryProcess;
