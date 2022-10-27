import React from "react";
import { Link } from "react-router-dom";
import imagen from "../../public/img/carro-de-la-carretilla.png"
import estilos from '../estilos/header.css'

export function Links() {
  return [

      {
          rel: 'estilossheet',
          href: estilos

      }
  ]
}




function Header() {



  return (

    <>


      <header>


        <div class="menu">
          <i class="fas fa-bars"></i>
        </div>




        <h1 class="nombre-sitio">Muebles <span>BAUZA </span> </h1>

        <div className="imgcarro">
        <Link
          to="/Carrito">
          <img src={imagen} alt="carrito de compras" />
        </Link>
        </div>


      </header>





    </>








  );





}

export default Header;
