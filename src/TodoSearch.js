import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  /*Linea que nos permite el uso de estados (o datos a ser modificados) en hooks (funciones para enganchar el estado y usarlo dentro del proyecto) */
  /*el valor del estado - funcion para actualizar/usar el estado */
  const [searchValue, setSearchValue] = React.useState('');

  /*Evento que realiza un filtrado de la lista cada que escriba en el input */
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    /*Enviarle un valor para la funcion del estado */
    setSearchValue(event.target.value);
  };

  return [
    /*Para manejar el valor, colocarlo como argumento 'value'*/
    <input className='TodoSearch' placeholder="Cebolla" value={searchValue} onChange={onSearchValueChange} />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
