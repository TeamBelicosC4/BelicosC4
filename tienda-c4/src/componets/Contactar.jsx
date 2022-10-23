import React from 'react'

function Contactar() {
  return (
    <>
        <main className="contenido-principal contenedor">
      <h2 className="text-center">Contacto</h2>

      
      <form className="formulario">
        

        <fieldset>
          
          <legend>Tus Datos</legend>
          
          <div className="campo">
            <label for="nombre">Nombre: </label>
            
            <input
              id="nombre"
              type="text"
              placeholder="Tu Nombre"
            />
          </div>
          <div className="campo">
            <label for="asunto">Asunto: </label>
            
            <input id="asunto" type="text" placeholder="Tu Asunto" />
          </div>
          <div className="campo">
            <label for="email">Email: </label>
            
            <input id="email" type="email" placeholder="Tu Email" />
          </div>

          <div className="campo">
            <label for="tel">Telefono: </label>
            
            <input id="tel" type="tel" placeholder="Tu Telefono" />
          </div>

          <div className="campo">
            <label for="tel">Mensaje: </label>
            
            <textarea cols="20" rows="9"> </textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>Pais</legend>
          <div className="campo">
            <label for="pais">Pais</label>
            <select id="pais">
              <option disabled>--Seleccione--</option>
              <option>Colombia</option>
              <option>Mexico</option>
              <option>Peru</option>
              <option>Argentina</option>
              <option>España</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Infomacion Extra</legend>

          <div className="campo">
            <label for="cliente">Cliente</label>
            <input id="cliente" type="radio" name="tipo" />
            
          </div>
         
          <div className="campo">
            <label for="proveedor">Proveedor</label>
            <input id="proveedor" type="radio" name="tipo" />
            
          </div>

          <div className="campo">
            <label for="categoria">Categoria de Interes</label>
            <input list="categorias" name="categorias" />
            <datalist id="categorias">
              <option value="Cocina"></option>
              <option value="Exterior"></option>
              <option value="Oficina"></option>
              <option value="Televisio"></option>
            </datalist>
          </div>
        </fieldset>

        <input className="btn" type="submit" />
      </form>
    </main>
      
    </>
  )
}

export default Contactar
