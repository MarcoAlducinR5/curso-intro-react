import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  /*Evento que realiza un filtrado de la lista cada que escriba en el input */
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input className='TodoSearch' placeholder="Cebolla" onChange={onSearchValueChange} />
  );
}

export { TodoSearch };
