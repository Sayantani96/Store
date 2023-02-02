import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const userToken=localStorage.getItem('authentication_token');
    let location=useLocation();

    if(!userToken||userToken===undefined){
        console.log("Entered here");
        return <Navigate to="/authenticate" state={{from:location}}/>
    }
  return children;
}

export default ProtectedRoute