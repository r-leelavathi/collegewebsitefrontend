import React, { useEffect, useState } from "react";
import './AdmissionProcess.css';
import axios from "axios";

const AdmissionProcess = () => {
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
      <h2 className="admission-title">Admission Process</h2>

      <div className="admission-content">
        <div className="admission-text">
          <div className="admission-section">
            <h3 className="section-title">For Regular Diploma Programme:</h3>
            <p className="section-subtitle">Fill Out the Application Form:</p>
            <ul className="admission-list">
              <li>Obtain and fill out the admission application form from the polytechnic or their official website.</li>
            </ul>
            <p className="section-subtitle">Submit Documents:</p>
            <ul className="admission-list">
              <li>Submit the completed application form along with all supporting documents to the polytechnic within the application period.</li>
              <li>Attach all necessary documents, including:</li>
              <ul className="inner-list">
                <li>Karnataka S.S.L.C or equivalent examination mark sheets.</li>
                <li>Certificates confirming five years of study in Karnataka.</li>
                <li>Eligibility Certificate (if applicable, for candidates from other boards).</li>
              </ul>
            </ul>
            <p className="section-subtitle">Verification of Documents:</p>
            <ul className="admission-list">
              <li>The polytechnic will review and verify the submitted documents to ensure all eligibility criteria are met.</li>
            </ul>
            <p className="section-subtitle">Completion of Admission Formalities:</p>
            <ul className="admission-list">
              <li>Once verified, candidates will receive an admission offer.</li>
              <li>Pay the required admission fee and complete any additional enrollment requirements as specified by the polytechnic.</li>
            </ul>
            <p className="section-subtitle">Orientation and Classes:</p>
            <ul className="admission-list">
              <li>Attend orientation (if offered) and start classes as scheduled.</li>
            </ul>
          </div>

          {/* Add more sections here as needed */}
        </div>

        <div className="admission-flowchart">
          <h3 className="flowchart-title">Admission Process Flowchart</h3>
          <img src="/assets/flowcharts/admissionprocess.jpg" alt="Admission Process Flowchart" className="flowchart-image" />
        </div>
      </div>

    </div>
  );
};

export default AdmissionProcess;
