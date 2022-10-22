import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer class="site-footer">
          <div class="grid-footer contenedor">
            <div>
              <h3>Categorias</h3>
              <nav class="footer-menu">
                <a href="#">Cocina</a>
                <a href="#">Oficina</a>
                <a href="#">Jardin</a>
                <a href="#">Cochera</a>
                <a href="#">Dormitorio</a>
              </nav>
            </div>
            <div>
              <h3>Sobre Nosotros</h3>
              <nav class="footer-menu">
                <a href="#">Nuestra Historia</a>
                <a href="#">Mision Vision y Valores</a>
                <a href="#">Carreras</a>
                <a href="#">Politica de Privacidad</a>
                <a href="#">Terminos del Servicio</a>
              </nav>
            </div>
            <div>
              <h3>soporte</h3>
              <nav class="footer-menu">
                <a href="#">Preguntas Frecuentes</a>
                <a href="#">Ayuda en Lienea</a>
                <a href="#">Confianza y Seguridad</a>
              </nav>
            </div>
          </div>
          <p class="derechos ">
            Todos los derechos reservados, tienda muebles
          </p>
        </footer>
      </div>
    </>
  )
}

export default Footer;
