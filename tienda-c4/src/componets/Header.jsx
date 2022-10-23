import React from "react";

function Header() {
  return (
    <>
      <div>
        <header className="icon__menu nombre-sitio ">
          <i className="fas fa-bars" id="btn_open"></i>

          <h1>
            Tienda de <span>Muebles </span>
          </h1>
        </header>
      </div>
    </>
  );
}

export default Header;
