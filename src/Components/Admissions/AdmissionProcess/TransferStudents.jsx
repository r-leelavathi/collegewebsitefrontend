import React, { useEffect, useState } from "react";
import './AdmissionProcess.css'; // Using the same CSS file as AdmissionProcess
import axios from "axios";

const TransferStudents = () => {
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
      <h2 className="admission-title">Change of College</h2>

      <div className="admission-content">
        <div className="admission-text">
          <div className="admission-section">
            <h3 className="section-title">Guidelines for Change of Colelge:</h3>
            <p className="section-subtitle">Overview:</p>
            <ul className="admission-list">
              <li>A student admitted to a particular institution is expected to undergo and complete the full course in the same institution. However, in extraordinary circumstances, with genuine reasons, students are allowed to take transfer from one institution to another during the beginning of academic years, i.e., in the 3rd or 5th semester of study.</li>
            </ul>
            <p className="section-subtitle">Guidelines:</p>
            <ul className="admission-list">
              <li>The sanctioned intake in any branch/programme shall not exceed in the event of any such transfer. Students should verify the vacancy position in the institute they seek to transfer to before submitting their application.</li>
              <li>Students are not eligible for a change of the course of study allotted at the time of admission to the diploma programme. Students admitted as repeaters are not eligible for transfer in that academic year.</li>
              <li>Transfer of students from one institution to another shall be completed by the Principal with requisite documents, including a letter of request by the student, No Objection Certificate from the parent institution, Acceptance certificate/letter from the institution to which the candidate seeks transfer, and transfer fees within the notified last date for admissions. Approval must be obtained from the Secretary, Board of Technical Examinations, Bengaluru.</li>
              <li>Students from private (self-financing) polytechnics are not eligible to transfer to Government or Government-Aided polytechnics. However, students from Government/Aided polytechnics (Grant–In-Aid programmes) are eligible to transfer to private (self-financing) programmes. Additionally, students from private (self-financing) polytechnics are eligible to transfer to other private (self-financing) polytechnics.</li>
              <li>No student shall be transferred in the 2nd, 4th, or 6th semesters of studies.</li>
              <li>Students admitted under the SNQ Quota (Supernumerary Seats) are not eligible for transfer.</li>
            </ul>
          </div>
        </div>

        <div className="admission-flowchart">
          <h3 className="flowchart-title">Change of College Flowchart</h3>
          <img src="/assets/flowcharts/transferprocess.jpg" alt="Transfer Process Flowchart" className="flowchart-image" />
        </div>
      </div>
    </div>
  );
};



export default TransferStudents
