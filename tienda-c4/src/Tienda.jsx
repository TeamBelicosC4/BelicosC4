import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Navegacion from "./componets/Navegacion";
import NuestrosProductos from "./componets/NuestrosProductos";
import React from "react";

function Tienda() {
  return (
    <>
      <div>
        <Header />
        <Navegacion />
        <NuestrosProductos/>
        <Footer />
      </div>
    </>
  )
}

export default Tienda;
