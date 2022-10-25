import React from 'react'
import {Link} from 'react-router-dom'

function Navegacion() {

  return (
    <>
    <div>
     <div className="contenedor-navegacion"> 
        <nav className="nav-principal">
            <Link to="/">Inicio</Link>
            <Link to="/Nosotros">Nosotros</Link>
            <Link to="/Tienda">Tienda</Link>
            <Link to="/Galeria">Galeria</Link>
            <Link to="/Contacto">Contacto</Link>
            
        </nav>
    </div>
    </div>
    </>
  )
}

export default Navegacion