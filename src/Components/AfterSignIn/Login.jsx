// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import './Login.css';
// import { setEncryptedItem } from './cryptoUtils'; // Import the utility function
// import RegisterationForm from './RegistrationForm';

// function Login() {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     setSubmitStatus('');
//     try {
//       const response = await axios.get(`http://localhost:8080/login/verify/${data.email}`);
//       const user = response.data;

//       if (user && user.password) {
//         const bcrypt = (await import('bcryptjs')).default;
//         const isPasswordValid = bcrypt.compareSync(data.password, user.password);

//         if (isPasswordValid) {
//           setEncryptedItem('userRole', user.userType);  // Store the user role securely
//           setEncryptedItem('isLoggedIn', 'true');  // Set login status securely

//           setSubmitStatus('Login successful!');
//           reset();

//           // Redirect based on user role
//           setTimeout(() => {
//             if (user.userType === 'admin') {
//               window.location.href = '/dashboard'; // Redirect to admin dashboard
//             } else if (user.userType === 'manager') {
//               window.location.href = '/'; // Redirect to manager page
//             }
//           }, 1000);
//         } else {
//           setSubmitStatus('Login failed. Incorrect password.');
//         }
//       } else {
//         setSubmitStatus('Login failed. User not found.');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         setSubmitStatus('User not found.');
//       } else {
//         console.error('Login failed', error);
//         setSubmitStatus('Login failed. Please check your email and password.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='login-main-container'>
//       <div className="login-container">
//         {/* <h1 className="text-3xl font-bold mb-4 text-orange-500">Login</h1> */}
//         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//           <div className="login-form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: 'Invalid email address'
//                 }
//               })}
//               type="text"
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="error">{errors.email.message}</p>}
//           </div>

//           <div className="login-form-group">
//             <label htmlFor="password">Password</label>
//             <div className="password-container">
//               <input
//                 id="password"
//                 {...register('password', {
//                   required: 'Password is required',
//                   minLength: {
//                     value: 6,
//                     message: 'Password must be at least 6 characters long'
//                   }
//                 })}
//                 type={passwordVisible ? 'text' : 'password'}
//                 placeholder="Enter your password"
//               />
//               <FontAwesomeIcon
//                 icon={passwordVisible ? faEyeSlash : faEye}
//                 className="password-toggle-icon"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               />
//             </div>
//             {errors.password && <p className="error">{errors.password.message}</p>}
//           </div>

//           <button type="submit" className="buttonCss" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>

//         </form>
//         {submitStatus && <p>{submitStatus}</p>}    </div>
//     </div>
//   );
// }

// export default Login;
