import React from "react";


function Header() {

 

  return (
<<<<<<< HEAD

    <>


      <header>


        <div class="menu">
          <i class="fas fa-bars"></i>
        </div>




        <h1 class="nombre-sitio">Muebles <span>BAUZA </span> </h1>


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

              <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
            </div>
          </li>
        </ul>


      </header>





    </>








  );
=======
    <>
    <div>
      <body id="body">
        <header className="icon__menu nombre-sitio ">
          <i className="fas fa-bars" id="btn_open"></i>
          <h1>
            Tienda de <span>Muebles </span>
          </h1>
        </header>

        <div className="menu__side" id="menu_side">
          <div className="name__page">
            <i className="fab fa-youtube"></i>
            <h4>MagtimusPro</h4>
          </div>

          <div className="options__menu">
            <a href="#" className="selected">
              <div className="option">
                <i className="fas fa-home" title="Inicio"></i>
                <h4>Inicio</h4>
              </div>
            </a>

            <a href="#">
              <div className="option">
                <i className="far fa-file" title="Portafolio"></i>
                <h4>Portafolio</h4>
              </div>
            </a>

            <a href="#">
              <div className="option">
                <i className="fas fa-video" title="Cursos"></i>
                <h4>Cursos</h4>
              </div>
            </a>

            <a href="#">
              <div className="option">
                <i className="far fa-sticky-note" title="Blog"></i>
                <h4>Blog</h4>
              </div>
            </a>

            <a href="#">
              <div className="option">
                <i className="far fa-id-badge" title="Contacto"></i>
                <h4>Contacto</h4>
              </div>
            </a>

            <a href="#">
              <div className="option">
                <i className="far fa-address-card" title="Nosotros"></i>
                <h4>Nosotros</h4>
              </div>
            </a>
          </div>
        </div>
      </body>
      </div>
    </>
  )
>>>>>>> b4f11a2b9ddc38b7cf166e67f7792e88e5ec558e
}

export default Header;
