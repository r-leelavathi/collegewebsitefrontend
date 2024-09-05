import React from 'react';
import './Program_Courses.css';

const Program_Courses = () => {
  const tableData = [
    { slNo: 1, title: 'Automobile Engineering', duration: '03', year: 1946, intake: '60+3(SNQ)' },
    { slNo: 2, title: 'Civil Engineering', duration: '03', year: 1946, intake: '60+3(SNQ)' },
    { slNo: 3, title: 'Mechanical Engineering', duration: '03', year: 1946, intake: '60+3(SNQ)' },
    { slNo: 4, title: 'Electrical and Electronics Engineering', duration: '03', year: 1946, intake: '60+3(SNQ)' },
    { slNo: 5, title: 'Chemical Engineering', duration: '03', year: 1978, intake: '60+3(SNQ)' },
    { slNo: 6, title: 'Polymer Technology', duration: '03', year: 1978, intake: '40+2(SNQ)' },
    { slNo: 7, title: 'Electronics and Communication Engineering', duration: '03', year: 1994, intake: '60+3(SNQ)' },
    { slNo: 8, title: 'Computer Science and Engineering', duration: '03', year: 2001, intake: '60+3(SNQ)' },
  ];

  return (
    <div className="table-container">
      <h2>Karnataka (Govt) Polytechnic, Mangalore

      </h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Title of Program</th>
            <th>Duration (In Years)</th>
            <th>Year of Starting</th>
            <th>Sanctioned Intake</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.slNo}>
              <td>{row.slNo}</td>
              <td>{row.title}</td>
              <td>{row.duration}</td>
              <td>{row.year}</td>
              <td>{row.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Program_Courses;
