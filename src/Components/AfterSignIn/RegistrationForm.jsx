import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegisterationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');

  const onSubmit = async (data) => {
    try {
      const bcrypt = (await import('bcryptjs')).default;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(data.password, salt);

      const user = {
        email: data.email,
        password: hashedPassword,
        mobileNumber: data.mobileNumber,
        userType: data.userType
      };

      await axios.post('http://localhost:8080/login/adduser', user);
      setSubmitStatus('Registration successful!');
      window.location.href = '/'; // Redirect to login page upon successful registration
    } catch (error) {
      alert('Registration failed', error);
      console.error('Registration failed', error);
      setSubmitStatus('Registration failed');
    }
  };

  return (
    <div className="stud-internship-container">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="stud-internship-internship-form">

        <div className="stud-internship-form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
            type="text"
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="stud-internship-form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="stud-internship-form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            id="mobileNumber"
            {...register('mobileNumber', {
              required: 'Mobile Number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Mobile Number must contain only digits'
              }
            })}
            type="text"
            placeholder="Enter your mobile number"
          />
          {errors.mobileNumber && <p className="error">{errors.mobileNumber.message}</p>}
        </div>

        <div className="stud-internship-form-group">
          <label htmlFor="userType">User Type</label>
          <select
            id="userType"
            {...register('userType', { required: 'User Type is required' })}
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
          </select>
          {errors.userType && <p className="error">{errors.userType.message}</p>}
        </div>

        <button type="submit" className="buttonCss">Register</button>
      </form>
      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
}

export default RegisterationForm;
