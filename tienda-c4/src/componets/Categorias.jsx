import React from "react";

function Categoria() {
  return (
    <>
      <div>
        <section class="contenedor categorias">
          <h2 class="categorias">Categorias Productos</h2>
          <div class="listado-categorias">
            <div class="categorias">
              <img src="img/categoria1.jpg" alt="imagen categoria" />
              <a href="#">Oficina</a>
            </div>
            <div class="categorias">
              <img src="img/categoria2.jpg" alt="imagen categoria" />
              <a href="#">Hogar</a>
            </div>
            <div class="categorias">
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
