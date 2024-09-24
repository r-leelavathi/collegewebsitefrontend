import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecruitmentPage.css'; // Import your custom CSS for styling

const RecruitmentPage = () => {
  const [recruitments, setRecruitments] = useState([]);

  useEffect(() => {
    fetchRecruitmentData();
  }, []);

  const fetchRecruitmentData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/recruitments/all');
      setRecruitments(response.data);
    } catch (error) {
      console.error('Error fetching recruitment data:', error);
    }
  };

  return (
    <div className="recruitment-page">
      <h1>Recruitment Opportunities</h1>
      <p>Welcome to the recruitment page! Here you can find the latest job openings and opportunities.</p>

      <table className="recruitment-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {recruitments.map((recruitment) => (
            <tr key={recruitment.id}>
              <td>{new Date(recruitment.date).toLocaleDateString()}</td>
              <td>{recruitment.description}</td>
              <td>
                <a href={recruitment.imgLink} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentPage;
