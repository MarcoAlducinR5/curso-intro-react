import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
  /* Evento cuando se hace clic recibiendo un argumento en la funcion */
  const onClickButton = (msg) =>{
    alert(msg);
  };

  return (
    /*Envolver nuestro codigo en una arrow funcion*/
    /*() => console.log("click!")*/
    /*Cuando se envie un argumento al evento */
    <button className="CreateTodoButton" onClick={() => onClickButton("Aqui se deberia abrir el modal")}>+</button>
  );
}

export { CreateTodoButton };
