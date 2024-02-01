import React from "react";
import '../estilos/tarea-formulario.css'

function TareaFormulario() {
    return(
        <form className="tarea-formulario">
            <input 
                className="tarea-input"
                type="text"
                placeholder="Ingrese una tarea"
                name="texto"
            />

            <button className="tarea-boton">
                Agregar Tarea
            </button>
            
        </form>
    )
}

export default TareaFormulario;