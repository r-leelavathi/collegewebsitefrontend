import axios from 'axios';
import { useEffect, useState } from 'react';
import RemoveRecord from './RemoveRecord';
import { getDecryptedItem } from './cryptoUtils';
import AddRecord from './AddRecord';

const ListRecord = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState([]);

  const isLoggedIn = getDecryptedItem('isLoggedIn') === 'true';
  

  useEffect(() => {
    axios.get(`${props.apiUrl}/display`)
      .then(response => {
        setUsers(response.data);

        // Dynamically extract columns from the first user's keys
        if (response.data.length > 0) {
          setColumns(Object.keys(response.data[0]));
        }
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
      });
  }, [props.apiUrl]);

  return (
    <div>
      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            {isLoggedIn&&<th>Actions</th>}
            
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {columns.map((col, index) => (
                <td key={index}>{user[col]}</td>
              ))}
              
                {/* Pass the primary key value and API URL to RemoveRecord */}
                {isLoggedIn&&(<td><RemoveRecord 
                  primaryKeyValue={user[props.primaryKey]} 
                  primaryKey={props.primaryKey} 
                  apiUrl={props.apiUrl}
                  setUsers={setUsers} 
                  users={users} 
                /></td>)
                }
              
            </tr>
          ))}
          {isLoggedIn&&(<tr><td><AddRecord location={props.formUrl} /></td></tr>) }
        </tbody>
      </table>
    </div>
  );
};

export default ListRecord;
