import React, { useEffect, useState } from "react";
import './AdmissionProcess.css'; // Using the same CSS file as AdmissionProcess
import axios from "axios";

const Repeaters = () => {
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
      <h2 className="admission-title">Re-admission of Candidate as Repeater</h2>

      <div className="admission-content">
        <div className="admission-text">
          <div className="admission-section">
            <h3 className="section-title">Guidelines for Re-admission of Repeaters:</h3>
            <p className="section-subtitle">Overview:</p>
            <ul className="admission-list">
              <li>A student who has discontinued studies in the middle of a semester and did not appear for Board Examinations due to a shortage of attendance may apply for re-admission in the same semester as a repeater in subsequent academic years, if they wish to complete the programme and meet the following conditions.</li>
            </ul>
            <p className="section-subtitle">Conditions for Re-admission:</p>
            <ul className="admission-list">
              <li>Re-admission (Repeater admission) shall be limited to 10% of the sanctioned intake of the branch/programme to which the student is admitted.</li>
              <li>Change of programme shall not be allowed for re-admission (Repeater admission) students.</li>
              <li>Re-admission (Repeater admission) is allowed only twice in each semester and must be within three years from the date of initial admission to the semester for which the student is seeking re-admission.</li>
              <li>Re-admission (Repeater admission) shall be completed by the Principal with the requisite documents, including a letter of request by the student and payment of re-admission fees, within the notified last date of admission. Re-admission must be approved by the Secretary, Board of Technical Examinations, Bengaluru.</li>
            </ul>
          </div>
        </div>

        <div className="admission-flowchart">
          <h3 className="flowchart-title">Re-admission Process Flowchart</h3>
          <img src="/assets/flowcharts/repeatersprocess.jpg" alt="Re-admission Process Flowchart" className="flowchart-image" />
        </div>
      </div>
    </div>
  );
};

export default Repeaters;
