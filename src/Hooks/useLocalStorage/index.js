import React from 'react';

/* Declaracion de un Hook personalizado para el cambio de estado y de localStorage, cambiandolo con el termino "item pero siguiendo la misma logica" */
function useLocalStorage(itemName, initialValue){
    /* Agregar en una variable el acceso a datos persistentes en el navegador */
    const localStorageItem = localStorage.getItem(itemName);
  
    /* Declarar una variable vacia para el uso de localStorage */ 
    let parsedItem;
  
    /* Evaluar si el navegador no contiene datos persistentes guardados en el navegador, por el hecho de que sea usuario nuevo y no se tenga ningun TODO creado ó tener TODOs creados */ 
    if(!localStorageItem){
      /* Gardado de datos persistentes en el navegador, enviados solo como string por el metodo JSON */
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      /* Conversion de datos a formato JavaScript con el metodo JSON */
      parsedItem = JSON.parse(localStorageItem);
    }
  
    /*Creando un estado exclusivo para los Todos */
    /* parsedItem: estado que guarda los TODOs obtenidos de localStorage */ 
    /* Reutilizacion de otros Hooks ya anteriormente usados */
    const [item, setItem] = React.useState(parsedItem);
  
    /* Funcion puente que funciona para actualizar tanto el estado como localStorage */
    const saveItem = (newItem) => {
      const stringFieldItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringFieldItem);
      setItem(newItem);
    };
  
    /* Regresando los datos que se requieren al Hook principal */
    return [
      item,
      saveItem,
    ];
  
  }
 
export {useLocalStorage};