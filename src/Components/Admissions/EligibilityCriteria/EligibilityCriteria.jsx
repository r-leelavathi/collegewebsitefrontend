import React from 'react';
import './EligibilityCriteria.css';

const EligibilityCriteria = () => {
  return (
    <div className="eligibility-container">
      <h2>Eligibility Criteria</h2>

      <div className="criteria-section">
        <h3>For Regular Diploma Programme:</h3>
        <ul>
          <li>The candidate must be a citizen of India.</li>
          <li>The candidate should have passed Karnataka S.S.L.C or an equivalent examination with a minimum of 35% marks in aggregate as per AICTE norms.</li>
          <li>The candidate must have completed at least five full academic years of study in Karnataka between 1st Standard and the qualifying examination.</li>
        </ul>
        <p className="note">
          <strong>Note:</strong> Candidates who have passed the 10th standard exam conducted by CBSE/ICSE or from other states must produce an Eligibility Certificate obtained from the Secretary, Board of Technical Examinations, Bengaluru.
        </p>
      </div>

      <div className="criteria-section">
        <h3>For Lateral Entry Admissions:</h3>
        <ul>
          <li>Passed 10+2 Examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology.</li>
          <li>OR Passed 10+2 Science (with Mathematics as one of the subjects) or 10+2 Science with Technical Vocational subject.</li>
          <li>OR 10th + 2 years of ITI with an appropriate trade.</li>
        </ul>
        <p className="note">Note: Candidates admitted through lateral entry must take bridge courses of the respective 1st-year diploma programme.</p>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
