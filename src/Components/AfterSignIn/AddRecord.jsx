import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddRecord = (props) => {
  const handleAddUser = () => {
    // Redirect to the registration form or implement form directly
    window.location.href = props.location;
  };

  return (
    <div>
      <button onClick={handleAddUser} className="add-user-button">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddRecord;
