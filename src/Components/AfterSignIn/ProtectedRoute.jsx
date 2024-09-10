import React from 'react';
import { Navigate } from 'react-router-dom';
import { getDecryptedItem } from './cryptoUtils';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const isLoggedIn = getDecryptedItem('isLoggedIn') === 'true';
  const userRole = getDecryptedItem('userRole');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If the user's role is allowed, render the component
  if (allowedRoles.includes(userRole)) {
    return <Component {...rest} />;
  } else {
    // Redirect to an unauthorized page or dashboard if the user role is not allowed
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
