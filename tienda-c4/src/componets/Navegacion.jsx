import React from 'react'
import {Link} from 'react-router-dom'

function Navegacion() {

  return (
    <>
    <div>
     <div class="contenedor-navegacion"> 
        <nav class="nav-principal">
            <Link to="/">Inicio</Link>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/Tienda">Tienda</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Galeria">Galeria</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav>
    </div>
    </div>
    </>
  )
}

export default Navegacion