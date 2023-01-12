import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
        <span className={`${props.completed && 'correcto'}`}>√</span>
        <p className={`${props.completed && 'cumplido'}`}>{ props.text }</p>
        <span className="Eliminar">X</span>
    </li>
  );
}

export { TodoItem };
