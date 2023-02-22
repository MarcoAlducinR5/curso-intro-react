import React from 'react';
import './TodoSearch.css';

/*Consumiendo las props del estado en TodoSearch */
function TodoSearch({searchValue, setSearchValue}) {

  /*Evento que realiza un filtrado de la lista cada que escriba en el input */
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    /*Enviarle un valor para la funcion del estado */
    setSearchValue(event.target.value);
  };

  return (
    /*Para manejar el valor, colocarlo como argumento 'value'*/
    <input className='TodoSearch' placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange} />
  );
}

export { TodoSearch };
