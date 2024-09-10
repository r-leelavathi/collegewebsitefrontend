import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const RemoveRecord = (props) => {
  const handleDelete = () => {
    axios.delete(`${props.apiUrl}/delete/${props.primaryKeyValue}`)
      .then(() => {
        // Update the user list after deletion
        props.setUsers(props.users.filter(user => user[props.primaryKey] !== props.primaryKeyValue));
      })
      .catch(err => {
        console.error('Error deleting user:', err);
        alert('Failed to delete user');
      });
  };

  return (
    <button onClick={handleDelete} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default RemoveRecord;
