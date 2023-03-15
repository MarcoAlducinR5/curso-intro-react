import React from 'react';

/* Declaracion de un Hook personalizado para el cambio de estado y de localStorage, cambiandolo con el termino "item pero siguiendo la misma logica" */
function useLocalStorage(itemName, initialValue){
  /* Generar un estado para el mensaje de error */
  const [error, setError] = React.useState(false);
  /* Generar un estado para el mensaje de carga y/o exito */
  const [loading, setLoading] = React.useState(true);

  /*Creando un estado exclusivo para los Todos */
    /* parsedItem: estado que guarda los TODOs obtenidos de localStorage */ 
    /* Reutilizacion de otros Hooks ya anteriormente usados */
    /* Cambiando el valor de entrada al inicial declarado en el Hook: initialValue */
    const [item, setItem] = React.useState(initialValue);

    /* Declaracion del efecto para que en un tiempo de 1 segundo, simulando traer informacion la API */
  React.useEffect(() => {
    setTimeout(() => {
      /* Try-Catch: Ejecuta cierto bloque de codigo ante cualquier posible error que llegara a suceder */ 
      try {
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

        /* re-renderiza parseItem */
        setItem(parsedItem);
        /* Re-rendiza el estado de la carga a False para el termino */
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });
  
    /* Funcion puente que funciona para actualizar tanto el estado como localStorage */
    const saveItem = (newItem) => {
      /* Aplicando el concepto dentro de la funcion para actualizar los TODOs */
      try {
        const stringFieldItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringFieldItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    /* Regresando los datos que se requieren al Hook principal */
    /* Se recpmienda el envio de 2 o mas estados en un onjeto cambiando [] con {} */
    return {
      item,
      saveItem,
      /* Retorno de los estados de los efectos */
      loading,
      error
    };
  
  }
 
export {useLocalStorage};