import React from "react";
import '../estilos/lista-tareas.css'
//import Tarea from "./Tarea";
//import TareaFormulario from "./TareaFormulario";
import ListaDeTareas from "./ListaDeTareas";


function ContenedorTareas (){
    
    return(
        <div className='contenedor-lista-principal'>
            <h1>Mis Tareas</h1>

            {/* <Tarea 
            texto='Aprender React'
            /> */}

            

            <ListaDeTareas />
        </div>
    )
}

export default ContenedorTareas;