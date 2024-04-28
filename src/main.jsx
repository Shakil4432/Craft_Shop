import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Components/Routes/Routes.jsx';
import { RouterProvider } from "react-router-dom";
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
