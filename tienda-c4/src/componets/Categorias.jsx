import React from "react";

function Categoria() {
  return (
    <>
      <div>
        <section className="contenedor categorias">
          <h2 className="categorias">Categorias Productos</h2>
          <div className="listado-categorias">
            <div className="categorias">
              <img src="img/categoria1.jpg" alt="imagen categoria" />
              <a href="#">Oficina</a>
            </div>
            <div className="categorias">
              <img src="img/categoria2.jpg" alt="imagen categoria" />
              <a href="#">Hogar</a>
            </div>
            <div className="categorias">
              <img src="img/categoria3.jpg" alt="imagen categoria" />
              <a href="#">Cocina</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Categoria;
