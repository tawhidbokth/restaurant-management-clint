import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AouthContext } from './../Provider/AouthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AouthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
