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
<<<<<<< HEAD



  return (

=======
  return (
>>>>>>> 2187181aebdfb6c5fa7960abd9609eb48d974168
    <>
      <header>
        <div class="menu">
          <ul className="carrito">
            <li class="submenu">
              <i class="fas fa-bars"></i>
              <div id="carrito">
                <table id="lista-carrito" class="u-full-width">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>

                <a href="#" id="vaciar-carrito" class="button u-full-width">
                  Vaciar Carrito
                </a>
              </div>
            </li>
          </ul>
        </div>

<<<<<<< HEAD



        <h1 class="nombre-sitio">Muebles <span>BAUZA </span> </h1>

        <div className="imgcarro">
        <Link
          to="/Carrito">
          <img src={imagen} alt="carrito de compras" />
        </Link>
        </div>


=======
        <h1 class="nombre-sitio">
          Muebles <span>BAUZA </span>{" "}
        </h1>

        <ul className="carrito">
          <li class="submenu">
            <img src="/img/cart.png" alt="carrito" />
            <div id="carrito">
              <table id="lista-carrito" class="u-full-width">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <a href="#" id="vaciar-carrito" class="button u-full-width">
                Vaciar Carrito
              </a>
            </div>
          </li>
        </ul>
>>>>>>> 2187181aebdfb6c5fa7960abd9609eb48d974168
      </header>
    </>
  );
<<<<<<< HEAD





=======
>>>>>>> 2187181aebdfb6c5fa7960abd9609eb48d974168
}

export default Header;
