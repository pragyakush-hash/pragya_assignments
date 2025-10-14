import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>

  
}

export default PrivateRoute;
