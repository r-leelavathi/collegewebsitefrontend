import React from 'react';
import "./ApplicationForms.css"

const ApplicationForms = () => {
  return (
    <div className="application-table-container">
      <table className="application-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Application Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Application Form</td>
            <td>
              <button>
                <a href={''} target="_blank" rel="noopener noreferrer">View</a>
              </button>
              <button><a href={''} download target="_blank">Download</a>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationForms;
