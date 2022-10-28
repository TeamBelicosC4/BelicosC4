import React from "react";
import estilos from '../estilos/productos.css'
import { Outlet } from 'react-router-dom'
import { useState } from "react";

export function Links() {
  return [

    {
      rel: 'estilossheet',
      href: estilos

    }
  ]
}


function NuestrosProductos() {

  /*Agregando Prodcutos al carrito*/
  const [cantidad, setCantidad] = useState(0)
  const handleSubmit = e => {
    e.preventDefault();

  

    if (cantidad < 1) {
      alert('Debes Seleccionar Cantidad')
      return;

    }

    

 /*alm en un obj
  const productoSeleccionado ={
    id: 


  }*/

  }

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

                <form onSubmit={handleSubmit} className="formulario">
                  <label htmlFor="cantidad">Cantidad</label>

                  <select
                    onChange={e => setCantidad(parseInt(e.target.value))}/*parseo y i++ de cantidad*/
                    id="cantidad">
                    <option value="0">Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <input
                    type="submit"
                    value="Agregar al Carrito" />
                </form>


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
