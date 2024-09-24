import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FacultyTable.css';

const FacultyTable = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:8080/api/faculties')
      .then(response => {
        setFacultyData(response.data);
        setFilteredData(response.data); // Initialize with all data
      })
      .catch(error => {
        console.error('Error fetching faculty data:', error);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    filterData(tab);
  };

  const filterData = (tab) => {
    let filtered = facultyData;

    if (tab !== 'all') {
      filtered = filtered.filter(faculty => {
        switch (tab) {
          case 'Computer Science & Engineering':
          case 'Mechanical Engineering':
          case 'Polymer Technology':
          case 'Civil Engineering':
          case 'Chemical Engineering':
          case 'Electrical & Electronics Engineering':
          case 'Electronics & Communication Engineering':
          case 'Automobile Engineering':
          case 'Office Staff':
          case 'Object Staff':
          case 'Science & Humanities':
            return faculty.facultyDepartment === tab;
          // case 'Office Staff':
          //   return faculty.facultyLocation.toLowerCase().includes('office');
          // case 'Object Staff':
          //   return !faculty.facultyLocation.toLowerCase().includes('office');
          default:
            return true;
        }
      });
    }

    setFilteredData(filtered);
  };

  const convertDriveLink = (driveLink) => {
    if (typeof driveLink === 'string') {
      const fileIdMatch = driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return driveLink;
  };

  return (
    <div className="faculty-list-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All
        </button>
        <button
          className={`tab ${activeTab === 'AT' ? 'active' : ''}`}
          onClick={() => handleTabClick('Automobile Engineering')}
        >
          AT
        </button>
        <button
          className={`tab ${activeTab === 'CH' ? 'active' : ''}`}
          onClick={() => handleTabClick('Chemical Engineering')}
        >
          CH
        </button>
        <button
          className={`tab ${activeTab === 'CE' ? 'active' : ''}`}
          onClick={() => handleTabClick('Civil Engineering')}
        >
          CE
        </button>
        <button
          className={`tab ${activeTab === 'CS' ? 'active' : ''}`}
          onClick={() => handleTabClick('Computer Science & Engineering')}
        >
          CS
        </button>
        <button
          className={`tab ${activeTab === 'EEE' ? 'active' : ''}`}
          onClick={() => handleTabClick('Electrical & Electronics Engineering')}
        >
          EEE
        </button>
        <button
          className={`tab ${activeTab === 'EC' ? 'active' : ''}`}
          onClick={() => handleTabClick('Electronics & Communication Engineering')}
        >
          EC
        </button>
        <button
          className={`tab ${activeTab === 'Mechanical Engineering' ? 'active' : ''}`}
          onClick={() => handleTabClick('Mechanical Engineering')}
        >
          ME
        </button>
        <button
          className={`tab ${activeTab === 'PO' ? 'active' : ''}`}
          onClick={() => handleTabClick('Polymer Technology')}
        >
          PO
        </button>
        <button
          className={`tab ${activeTab === 'Science' ? 'active' : ''}`}
          onClick={() => handleTabClick('Science & Humanities')}
        >
          Science
        </button>
        <button
          className={`tab ${activeTab === 'Office Staff' ? 'active' : ''}`}
          onClick={() => handleTabClick('Office Staff')}
        >
          Office Staffs
        </button>
        <button
          className={`tab ${activeTab === 'Object Staff' ? 'active' : ''}`}
          onClick={() => handleTabClick('Object Staff')}
        >
          Object Staffs
        </button>
      </div>

      <div className="faculty-list">
        {filteredData.map(faculty => (
          <div className="faculty-card" key={faculty.facultyId}>
            {faculty.facultyLink && (
              <iframe
                src={convertDriveLink(faculty.facultyLink)}
                title={`${faculty.facultyName}'s Image`}
                className="faculty-image"
                frameBorder="0" allowFullScreen
              ></iframe>
            )}
            <h3 className="faculty-name">{faculty.facultyName}</h3>
            <p><strong>Designation:</strong> {faculty.facultyDesignation}</p>
            <p><strong>Department:</strong> {faculty.facultyDepartment}</p>
            {/* <p><strong>Location:</strong> {faculty.facultyLocation}</p> */}
            {/* <p><strong>Phone:</strong> {faculty.facultyPhone}</p> */}
            <p><strong>Email:</strong> {faculty.facultyEmail}</p>
            {/* <p><strong>Address:</strong> {faculty.facultyAddress}</p> */}
            <a href={faculty.facultyLink} target="_blank" rel="noopener noreferrer" className="faculty_view_profile">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyTable;
