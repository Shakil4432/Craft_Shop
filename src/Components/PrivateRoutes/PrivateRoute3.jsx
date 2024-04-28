import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

export default function PrivateRoute3({children}) {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading){
      return <h1 className='text-4xl font-bold text-center'>Loading</h1>
  }
  if(!user){
      return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
  }
  else{
      return(
         <div>
           {children}
         </div>
      )
  }
}
