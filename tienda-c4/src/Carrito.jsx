import React from 'react'
import Header from './componets/Header'
import Navegacion from './componets/Navegacion'
import Footer from './componets/Footer'
import estilos from '../src/estilos/carrito.css'

export function Links() {
    return [

        {
            rel: 'estilossheet',
            href: estilos

        }
    ]
}



function Carrito() {
    return (
        <>
            <Header />
            <Navegacion />
            <main className='contenedor'>
                <h1 className='heading'>Carrito de Compras</h1>
                <div className='contenido'>
                    <div className='carrito'>
                        <h2>Articulos</h2>
                    </div>
                    <aside className='resumen'>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a Pagar: $ </p>


                    </aside>

                </div>




            </main>
            <Footer />
        </>
    )
}

export default Carrito
