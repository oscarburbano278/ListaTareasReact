import React from "react";
import '../estilos/lista-tareas.css'
//import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";


function ContenedorTareas (){
    return(
        <div className='contenedor-lista-principal'>
            <h1>Mis Tareas</h1>

            {/* <Tarea 
            texto='Aprender React'
            /> */}

            <TareaFormulario />
        </div>
    )
}

export default ContenedorTareas;