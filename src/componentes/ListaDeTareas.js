import React,{ useState } from "react";
import TareaFormulario from "./TareaFormulario";
import { DefaultContext } from "react-icons";
import'../estilos/listaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas (){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {

    //console.log("Tarea agregada");
    //console.log(tarea);
      if  (tarea.texto.trim()) {        
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
      }

    }

    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }


    return(
       <>
        <TareaFormulario onSubmit={agregarTarea}/>

        <div className="tareas-lista-contenedor">
            {
              tareas.map((tarea) =>
              <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto = {tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
              />
              )
            }
        </div>
        
       </>     
    );
}

export default ListaDeTareas;