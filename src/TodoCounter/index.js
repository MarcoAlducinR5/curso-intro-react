import React from 'react';
import './TodoCounter.css';
/* Se importa el contexto para usar sus valores en TodoSearch */
import { TodoContext } from '../Context';

function TodoCounter() {
  /* Declarando los valores del contexto renombrandolos para no */
  /* afectar el funcionamiento, anque se pueden usar tal cual, los */
  /* nombres de los valores */
  const {totalTodos: total, completedTodos: completed} = React.useContext(TodoContext);
  return (
      <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

/*El encapsulamiento de JavaScript*/
export { TodoCounter };
