import React from 'react';
import { IconCheck } from '../Icons/IconCheck';
import { IconDelete } from '../Icons/IconDelete';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
        {/* agregar condicionales en string con variables de javacript */}
        <span className={`pendiente ${props.completed && 'correcto'}`} onClick={props.onComplete}><IconCheck /></span>
        <p className={`${props.completed && 'cumplido'}`}>{ props.text }</p>
        {/* Declarando una funcion en un evento, cuando no se le envia argumentos a la misma, no se esta llamando a la ejecucion */}
        <span className="Eliminar" onClick={props.onDelete}><IconDelete /></span>
    </li>
  );
}

export { TodoItem };
