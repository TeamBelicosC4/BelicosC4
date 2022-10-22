/*import { useState } from 'react'
import reactLogo from './assets/react.svg'*/

import './App.css'
import Categoria from './componets/Categorias'
import Footer from './componets/Footer'
import Header from './componets/Header'
import Hero from './componets/Hero'
import Navegacion from './componets/Navegacion'
import NuestrosProductos from './componets/NuestrosProductos'
import SobreNosotros from './componets/SobreNosotros'

function App() {  

  return (
    <>
    <Header/>  
    <Navegacion/>
    <Hero/>
    <Categoria/>
    <SobreNosotros/>
    <NuestrosProductos/>
    <Footer/> 
    </>
  )
}

export default App


