import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {  ClipLoader } from 'react-spinners';


export default function PrivateRoute({children}) {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h1 className='text-4xl font-bold text-center'>
             <ClipLoader
        
        loading={loading}
        color='#36D7B7'
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </h1>
    }
    if(user){
        return children
    }
   
    return <Navigate to="/login" state={location?.pathname || '/'} replace></Navigate>
}
