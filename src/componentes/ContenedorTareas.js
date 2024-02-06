import React from "react";
import '../estilos/lista-tareas.css'
import ListaDeTareas from "./ListaDeTareas";


function ContenedorTareas (){
    
    return(
        <div className='contenedor-lista-principal'>
            <h1>Mis Tareas</h1>                    

            <ListaDeTareas />
        </div>
    )
}

export default ContenedorTareas;