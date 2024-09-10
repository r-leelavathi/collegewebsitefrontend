import React, { useEffect, useState } from "react";
import './AdmissionProcess.css'
import axios from "axios";

const AdmissionProcessForm = () => {
  const [circulars, setCirculars] = useState([]);
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/circulars')
      .then(response => {
        setCirculars(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the circulars!", error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newCircular = {
      year: year,
      link: link
    };

    axios.post('http://localhost:8080/api/circulars', newCircular)
      .then(response => {
        setCirculars([...circulars, response.data]);
        setYear('');
        setLink('');
        setShowForm(false); // Hide form after submitting
      })
      .catch(error => {
        console.error("There was an error adding the circular!", error);
      });
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/circulars/${id}`)
      .then(() => {
        setCirculars(circulars.filter(circular => circular.id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the circular!", error);
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle form visibility
  };
  return (
    <>
      <div className="admission_container">
        <div className="admission_container-regular">
          <h2>Admission Process</h2>

          <h3>For Regular Diploma Programme:</h3>
          <p>Fill Out the Application Form:</p>
          <ul>
            <li>Obtain and fill out the admission application form from the polytechnic or their official website.</li>
          </ul>
          <p>Submit Documents:</p>
          <ul>
            <li>Submit the completed application form along with all supporting documents to the polytechnic within the application period.</li>
            <li>Attach all necessary documents, including:</li>
            <ul className="admission_container-innerList">
              <li>Karnataka S.S.L.C or equivalent examination mark sheets.</li>
              <li>Certificates confirming five years of study in Karnataka.</li>
              <li>Eligibility Certificate (if applicable, for candidates from other boards).</li>
            </ul>
          </ul>
          <p>Verification of Documents:</p>
          <ul>
            <li>The polytechnic will review and verify the submitted documents to ensure all eligibility criteria are met.</li>
          </ul>
          <p>Completion of Admission Formalities:</p>
          <ul>
            <li>Once verified, candidates will receive an admission offer.</li>
            <li>Pay the required admission fee and complete any additional enrollment requirements as specified by the polytechnic.</li>
          </ul>
          <p>Orientation and Classes:</p>
          <ul>
            <li>Attend orientation (if offered) and start classes as scheduled.</li>
          </ul>
        </div>
        <div className="admission_container-lateral">
          <h3>For Lateral Entry students:</h3>
          <p>For lateral entry into the second year/III Semester of the three-year diploma program, candidates must have:</p>
          <ul className="admission_container-innerList">
            <li>Passed 10+2 Examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology, OR</li>
            <li>Passed 10+2 Science (with Mathematics as one of the subjects) or 10+2 Science with a Technical Vocational subject, OR</li>
            <li>Completed 10th + (2 years ITI) with an appropriate trade.</li>
            <li>Candidates admitted through lateral entry must complete bridge courses of the respective 1st-year diploma program.</li>
          </ul>
        </div>
        <div className="admission_container-transfer">
          <h3>Admission Process for Transfer of Students:</h3>
          <p>Transfers between institutions are allowed in extraordinary circumstances (e.g., in the 3rd/5th semester) with specific guidelines:</p>
          <ul className="admission_container-innerList">
            <li>The sanctioned intake in any branch/ programme shall not exceed in the event of any such transfer. The students should verify themselves the vacancy position in the institute for which they seek transfer, before submitting their application.</li>
            <li>Students are not eligible for change of course of study allotted at the time of admission to the diploma programme. In case of student who are admitted as repeaters are not eligible to take transfer in that academic year.</li>
            <li>Transfer of students from one institution to another institution shall be completed by the Principal with requisite documents ( Letter of request by the student, No Objection Certificate from the parent institution, Acceptance certificate/letter from the institution to which candidate seeks transfer) and transfer fees within the notified last date for admissions and duly approved by the Secretary, Board of Technical Examinations, Bengaluru.</li>
            <li>Students from private (self-financing) Polytechnics are not eligible to take transfer to Government / Government-Aided Polytechnics. However students from Government/Aided polytechnic( Grant –In-Aid programmes) are eligible to take transfer to Private (self-financing) programme. Also students from private (self-financing) polytechnics are eligible to take transfer to any other private (self-financing) polytechnics.</li>
            <li>No student shall be transferred in 2nd /4th /6th Semester of studies.</li>
            <li>Students admitted under SNQ Quota (Supernumerary Seats) are not eligible for transfer.</li>
          </ul>
        </div>
        <div className="admission_container-repeater">
          <h3>Re-admission of Candidate as Repeater:</h3>
          <p>A student who has discontinued his/her studies in the middle of a semester and not appeared for Board Examinations due to shortage of attendance, may apply and get readmission in the same semester as a Repeater in the subsequent academic year/s if he/she desires to complete the programme and satisfying the following conditions.</p>
          <ul className="admission_container-innerList">
            <li>Re-admission (Repeater admission) shall be limited to 10% of the sanctioned intake of the branch/programme to which he/she is admitted.</li>
            <li>Change of programme shall not be allowed for Readmission (Repeater admission) student.</li>
            <li>Readmission (Repeater admission) is allowed only twice in each semester and shall be within the period of three years from the date of admission to the semester for which he / she seeking admission.</li>
            <li>Readmission (Repeater admission) shall be completed by the Principal with requisite documents (Letter of request by the student) and readmission fees within the notified last date of admission. Readmission (Repeater admission) shall be approved by the Secretary, Board of Technical Examinations, Bengaluru.</li>
          </ul>
        </div>
        <div className="admission_container-changeOfBranch">
          <h3>Change of Branch (Programme) in 2nd year Diploma:</h3>
          <p>The change of branch (programme) is allowed in 2nd year (3rd semester) Engineering Diploma programme on the following conditions.</p>
          <ul className="admission_container-innerList">
            <li>A student seeking change of branch in 2nd year (3rd semester) must pass in all the courses (subjects) of 1st year (1st and 2nd semester) diploma programme for which he/she was admitted.</li>
            <li>Such students opted for change of branch (Programme) shall take bridge courses as mentioned in <b>Annexure-2</b>.</li>
            <li> Change of branch (Programme) is allowed on merit basis (at the institution level) and within the approved intake of the branch (programme).</li>
          </ul>
        </div>
        <div className="admission_container-circular">
          <h2>Admission Circulars</h2>
          <table className="admission_container-circular-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Year</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {circulars.map((circular, index) => (
                <tr key={circular.id}>
                  <td>{index + 1}</td>
                  <td>{circular.year}</td>
                  <td><a href={circular.link}>Admission Circular {circular.year}</a></td>
                  <td>
                    <button onClick={() => handleDelete(circular.id)} className="admission_container-btn">Delete</button>
                    <button onClick={toggleForm} className="admission_container-btn">Add</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Conditional rendering of the form */}
          {showForm && (
            <div>
              <h3>Add New Circular</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  Year:
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Link:
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="admission_container-btn">Add Circular</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
};

export default AdmissionProcessForm;
