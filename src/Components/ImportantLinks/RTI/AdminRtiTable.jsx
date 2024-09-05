// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './RtiTable.css';

// const AdminRtiTable = () => {
//   const [rtiFiles, setRtiFiles] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/rti')
//       .then(response => {
//         setRtiFiles(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching the RTI Files:', error);
//       });
//   }, []);

//   return (
//     <div className="rti-container">
//       <h1>RTI Files</h1>
//       <p>
//         The document 4(1) contains the following:
//         <ol>
//           <li>The particulars of its organisation, functions, and duties.</li>
//           <li>The powers and duties of its officers and employees.</li>
//           <li>The procedure followed in the decision-making process, including channels of supervision and accountability.</li>
//           <li>The monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations.</li>
//           <li>A directory of its officers and employees.</li>
//           <li>The names, designations, and other particulars of the Public Information Officers.</li>
//         </ol>
//       </p>
//       <table>
//         <thead>
//           <tr>
//             <th>Sl No</th>
//             <th>RTI Year</th>
//             <th>RTI Link</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rtiFiles.map((file, index) => (
//             <tr key={file.rtiId}>
//               <td>{index + 1}</td>
//               <td>{file.rtiYear}</td>
//               <td><a href={file.rtiLink} target="_blank" rel="noopener noreferrer">View RTI</a></td>


//               <td>
//                 {editing === file.id ? (
//                   <input
//                     type="text"
//                     name="description"
//                     value={editedData.description || ''}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   file.description
//                 )}
//               </td>
//               <td>
//                 <button
//                   className="circular-table-action-button circular-table-view-button"
//                   onClick={() => handleView(file.id)}
//                 >
//                   View
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className="circular-table-action-button circular-table-download-button"
//                   onClick={() => handleDownload(file.id)}
//                 >
//                   Download
//                 </button>
//               </td>
//               <td>
//                 {editing === circular.id ? (
//                   <button
//                     className="circular-table-action-button circular-table-save-button"
//                     onClick={() => handleSave(file.id)}
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     className="circular-table-action-button circular-table-edit-button"
//                     onClick={() => handleEdit(file.id)}
//                   >
//                     Edit
//                   </button>
//                 )}
//               </td>
//               <td>
//                 <button
//                   className="circular-table-action-button circular-table-delete-button"
//                   onClick={() => handleDelete(file.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>
//   );
// };


// export default AdminRtiTable
