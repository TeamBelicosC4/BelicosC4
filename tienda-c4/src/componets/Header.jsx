import React from "react";

function Header() {
  return (
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
      </header>
    </>
  );
}

export default Header;
