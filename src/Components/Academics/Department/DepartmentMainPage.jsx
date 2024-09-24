import React from 'react';
import './DepartmentMainPage.css';
import { Link } from 'react-router-dom';

// Array of department details
const departments = [
    { name: 'Automobile Engineering', nicname: 'AT', image: '/assets/department/at.jpeg' },
    { name: 'Chemical Engineering', nicname: 'CH', image: '/assets/department/ch.jpeg' },
    { name: 'Civil Engineering', nicname: 'CE', image: '/assets/department/ce.jpeg' },
    { name: 'Computer Science and Engineering', nicname: 'CS', image: '/assets/department/cs.jpeg' },
    { name: 'Electrical and Electronics Engineering', nicname: 'EEE', image: '/assets/department/eee.jpeg' },
    { name: 'Electronics and Communication', nicname: 'EC', image: '/assets/department/ec.jpeg' },
    { name: 'Mechanical Engineering', nicname: 'ME', image: '/assets/department/me.jpeg' },
    { name: 'Polymer Technology', nicname: 'PO', image: '/assets/department/po.jpeg' },
    { name: 'Science & Humanities', nicname: 'SC', image: '/assets/department/po.jpeg' },
];

const DepartmentMainPage = () => {
    return (
        <div className="departments-container">
            <div className="departments-grid">
                {departments.map((dept, index) => (
                    <div key={index} className="department-card">
                        <img src={dept.image} alt={dept.name} className="department-image" />
                        <Link to={`/academics/department/${dept.nicname}`}>
                            <div className="department-name">{dept.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentMainPage;
