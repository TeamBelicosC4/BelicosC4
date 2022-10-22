import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Nosotros from './Nosotros'
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
import NuestrosProductos from './componets/NuestrosProductos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/Nosotros',
    element:<Nosotros/>
  },
  {
    path: '/Tienda',
    
    element:<NuestrosProductos/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>   
   
  </React.StrictMode>
)




