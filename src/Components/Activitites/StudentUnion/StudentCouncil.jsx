import React, { useEffect, useState } from 'react';
import './StudentCouncil.css';

const StudentCouncil = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    // Fetch data for Student Welfare Coordinators
    fetch('http://localhost:8080/api/student-welfare-coordinators')
      .then(response => response.json())
      .then(data => setCoordinators(data))
      .catch(error => console.error('Error fetching coordinators:', error));

    // Fetch data for Student Welfare Officers
    fetch('http://localhost:8080/api/student-welfare-officers')
      .then(response => response.json())
      .then(data => setOfficers(data))
      .catch(error => console.error('Error fetching officers:', error));
  }, []);

  return (
    <>
      <div className="council-header">
        <h1 className="title">Student Welfare Officers</h1>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="table-header">Sl No.</th>
              <th className="table-header">Name</th>
              <th className="table-header">Image</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{officer.studentWelfareOfficerId}</td>
                <td className="table-cell">{officer.studentWelfareOfficerName}</td>
                <td className="table-cell">{officer.studentWelfareOfficerImage} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="council-header">
        <h1 className="title">Student Welfare Coordinators</h1>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="table-header">Sl No.</th>
              <th className="table-header">Name</th>
              <th className="table-header">Branch</th>
              <th className="table-header">Year</th>
              <th className="table-header">Role</th>
            </tr>
          </thead>
          <tbody>
            {coordinators.map((coordinator, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{coordinator.studentWelfareCoordinatorId}</td>
                <td className="table-cell">{coordinator.studentWelfareCoordinatorName}</td>
                <td className="table-cell">{coordinator.studentWelfareCoordinatorBranch}</td>
                <td className="table-cell">{coordinator.studentWelfareCoordinatorYear}</td>
                <td className="table-cell">{coordinator.studentWelfareCoordinatorRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default StudentCouncil;
