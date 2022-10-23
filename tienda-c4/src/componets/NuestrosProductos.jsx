import React from "react";

import {Outlet} from 'react-router-dom'


function NuestrosProductos() {
  return (
    <>
      <div>
        <main className="contenido-principal contenedor">
          <h2 className="text-center">Nuestros Productos</h2>
          <div className="listado-productos">
            <div className="producto">
              <img src="img/producto1.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto1</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
            <div className="producto">
              <img src="img/producto2.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto2</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
            <div className="producto">
              <img src="img/producto3.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto3</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
            <div className="producto">
              <img src="img/producto4.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto4</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
            <div className="producto">
              <img src="img/producto5.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto5</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
            <div className="producto">
              <img src="img/producto6.jpg" alt="Imagen producto" />
              <div className="text-producto">
                <h3>producto6</h3>
                <p>
                  em Ipsum es simplemente el texto de relleno de las imprentas y
                  archivos de texto. Lorem Ipsum ha sido el texto de relleno
                  estándar d
                </p>
                <p className="precio">$1.000.000</p>
                <a className="btn" href="#">
                  Agregar al carrito
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default NuestrosProductos;
