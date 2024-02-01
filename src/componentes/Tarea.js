import React from "react";
import '../estilos/tarea.css';
import {AiFillCloseSquare} from 'react-icons/ai'

function Tarea ({ texto, completada }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto">
                {texto}
            </div>
            <div className="terea-contenedor-icono">
                <AiFillCloseSquare  className="terea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;