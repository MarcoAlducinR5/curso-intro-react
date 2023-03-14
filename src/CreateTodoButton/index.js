import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../Context';

function CreateTodoButton() {

  const {setOpenModal} = React.useContext(TodoContext);
  
  /* Evento cuando se hace clic recibiendo un argumento en la funcion */
  const onClickButton = () =>{
    setOpenModal(true);
  };

  return (
    /*Envolver nuestro codigo en una arrow funcion*/
    /*() => console.log("click!")*/
    /*Cuando se envie un argumento al evento */
    <button className="CreateTodoButton" onClick={onClickButton}>+</button>
  );
}

export { CreateTodoButton };
