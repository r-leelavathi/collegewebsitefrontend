// src/components/ResearchPublicationList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ResearchPublication.css"

const ResearchPublication = () => {
  const [publications, setPublications] = useState([]);

  // Fetch all research publications from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/publications')
      .then(response => {
        setPublications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the publications!', error);
      });
  }, []);

  return (
    <div className='research_container'>
      <h1>Research Publications</h1>
      <table border="1" cellPadding="10" cellSpacing="0" className="research_container-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Department</th>
            <th>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication) => (
            <tr key={publication.researchPublicationSlNo}>
              <td>{publication.researchPublicationSlNo}</td>
              <td>{publication.researchPublicationDate}</td>
              <td>{publication.researchPublicationName}</td>
              <td>{publication.researchPublicationDepartment}</td>
              <td>{publication.researchPublicationTitle}</td>
              <td><a href={publication.researchPublicationLink} target="_blank" rel="noopener noreferrer">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchPublication;
