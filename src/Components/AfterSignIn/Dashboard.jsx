import React from 'react';
import ListRecord from './ListRecord';
import AddRecord from './AddRecord';
import './Dashboard.css';
import LoginHome from './LoginHome';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex' }}>
        <AddRecord location='/register' />
        <button onClick={() => { window.location.href = '/'; }} className="add-user-button"> Return to HomePage </button>
        <button onClick={handleLogout} className="add-user-button"> Log Out </button>
      </div>

      <ListRecord apiUrl='http://localhost:8080/login' primaryKey='email' formUrl="/newregistration" />
      <LoginHome />
    </div>
  );
};

export default Dashboard;
