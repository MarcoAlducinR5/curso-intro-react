import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert("Ya completaste el TODO " + props.text);
  };
  const onDelete = () => {
    alert("Borraste el TODO " + props.text);
  };

  return (
    <li className="TodoItem">
        {/* agregar condicionales en string con variables de javacript */}
        <span className={`pendiente ${props.completed && 'correcto'}`} onClick={onComplete}>√</span>
        <p className={`${props.completed && 'cumplido'}`}>{ props.text }</p>
        {/* Declarando una funcion en un evento, cuando no se le envia argumentos a la misma, no se esta llamando a la ejecucion */}
        <span className="Eliminar" onClick={onDelete}>X</span>
    </li>
  );
}

export { TodoItem };
