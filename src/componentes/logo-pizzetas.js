import React from "react";
import imagenLogo from '../imagenes/img-logo.png'
import '../estilos/logo.css';

function LogoPizzetas () {
    return(
        <div className='logo-contenedor'>
          <img 
            src={imagenLogo}
            className='img-logo'
          />
      </div>
    )
}

export default LogoPizzetas;