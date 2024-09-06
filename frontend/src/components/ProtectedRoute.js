import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)
  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
