import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Nosotros from './Nosotros'
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
import Tienda from './Tienda'
import GaleriaTienda from './GaleriaTienda'
import Contacto from './Contacto'
import Carrito from './Carrito'





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
    
    element:<Tienda/>
  },
  {
    path: '/Galeria',
    element:<GaleriaTienda/>
  },

  {
    path: '/Contacto',
    element:<Contacto/>
  },

 {
  path: '/Carrito',
    element:<Carrito/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router}/>  
=======
    <RouterProvider router={router}/>   
>>>>>>> 4a30018a9272d884b362462b010e6f05b96d34f6
  </React.StrictMode>
)




