import React from "react";
import '../estilos/lista-tareas.css'
import Tarea from "./Tarea";


function ListaTareas (){
    return(
        <div className='lista-principal'>
            <h1>Mis Tareas</h1>

            <Tarea 
            texto='Aprender React'
            />
        </div>
    )
}

export default ListaTareas;