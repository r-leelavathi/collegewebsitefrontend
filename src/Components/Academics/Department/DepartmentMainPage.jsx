import React from 'react';
import './DepartmentMainPage.css';
import { Link } from 'react-router-dom';

// Array of department details
const departments = [
    { name: 'Automobile Engineering', image: '/assets/department/at.jpeg' },
    { name: 'Chemical Engineering', image: '/assets/department/ch.jpeg' },
    { name: 'Civil Engineering', image: '/assets/department/ce.jpeg' },
    { name: 'Computer Science and Engineering', image: '/assets/department/cs.jpeg' },
    { name: 'Electrical and Electronics Engineering', image: '/assets/department/eee.jpeg' },
    { name: 'Electronics and Communication', image: '/assets/department/ec.jpeg' },
    { name: 'Mechanical Engineering', image: '/assets/department/me.jpeg' },
    { name: 'Polymer Technology', image: '/assets/department/po.jpeg' },
];

const DepartmentMainPage = () => {
    return (
        <div className="departments-container">
            <div className="departments-grid">
                {departments.map((dept, index) => (
                    <div key={index} className="department-card">
                        <img src={dept.image} alt={dept.name} className="department-image" />
                        <Link to="cs">
                            <div className="department-name">{dept.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentMainPage;
