import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
      <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

/*El encapsulamiento de JavaScript*/
export { TodoCounter };
