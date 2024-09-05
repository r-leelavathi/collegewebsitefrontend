import React from 'react';
import './DepartmentMainPage.css';

const departments = [
    { slNo: 1, title: 'Automobile Engineering', hod: 'Devraju.D' },
    { slNo: 2, title: 'Chemical Engineering', hod: 'Rekha T' },
    { slNo: 3, title: 'Civil Engineering', hod: 'Deepak Talekar' },
    { slNo: 4, title: 'Computer Science and Engineering', hod: 'P D Talawar' },
    { slNo: 5, title: 'Electrical and Electronics Engineering', hod: 'Ravindra Mahabaleshwar Keni' },
    { slNo: 6, title: 'Electronics and Communication Engineering', hod: 'Satheesha K M' },
    { slNo: 7, title: 'Mechanical Engineering', hod: 'Girish Babu B P' },
    { slNo: 8, title: 'Polymer Technology', hod: 'Santhosh Kumar P' },
];

const DepartmentMainPage = () => {
    return (
        <div className="department-container">
            {departments.map((dept) => (
                <div key={dept.slNo} className="department-box">
                    <h3>{dept.title}</h3>
                    <p><strong>HOD:</strong> {dept.hod}</p>
                </div>
            ))}
        </div>
    );
};

export default DepartmentMainPage;
