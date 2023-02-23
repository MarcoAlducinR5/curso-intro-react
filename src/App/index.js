import React from 'react';
/* Separacion de la parte grafica en un archivo aparte */
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lloras con la Llorona', completed: false }
]; */

function App() {
  /* Agregar en una variable el acceso a datos persistentes en el navegador */
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  /* Declarar una variable vacia para el uso de localStorage */ 
  let parsedTodos;

  /* Evaluar si el navegador no contiene datos persistentes guardados en el navegador, por el hecho de que sea usuario nuevo y no se tenga ningun TODO creado ó tener TODOs creados */ 
  if(!localStorageTodos){
    /* Gardado de datos persistentes en el navegador, enviados solo como string por el metodo JSON */
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    /* Conversion de datos a formato JavaScript con el metodo JSON */
    parsedTodos = JSON.parse(localStorageTodos);
  }

  /*Creando un estado exclusivo para los Todos */
  /* parsedTodos: estado que guarda los TODOs obtenidos de localStorage */ 
  const [todos, setTodos] = React.useState(parsedTodos);
  /*Trasladando el estado de TodoSearch a App.js */
  const [searchValue, setSearchValue] = React.useState("");

  /* Contar cuantos Todos tenemos y cuandos completados */
  const completedTodos = todos.filter( todo => todo.completed ).length;
  const totalTodos = todos.length;

  /*Filtrar los todos de acuerdo al criterio de busqueda*/
  let searchedTodos = [];
  /* Si no se escribe nada, mostrata los Todos, si no, filtrara acorde a lo que escribe sin importar que escriba en minuscula o mayuscula */
  if(!searchValue.length >= 1 ){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter (todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  /* Funcion puente que funciona para actualizar tanto el estado como localStorage */
  const saveTodos = (newTodos) => {
    const stringFieldTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringFieldTodos);
    setTodos(newTodos);
  };

  /* funcion para marcar como completado un Todo */
  const completeTodo = (text) => {
    /*Encontrar el index del todo de acuerdo al texto del Todo */
    const todoIndex = todos.findIndex(todo => todo.text === text);

    /*Clonando el arreglo declarado anteriormente*/
    const newTodos = [...todos];
    /*forma corta */
    /*cambiando la propiedad de completed a true en esa posicion*/
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    /*forma larga */
    /* newTodos[todoIndex] = {
      text: newTodos[todoIndex].text,
      completed: true
    } */
    /*Re-Renderizar el arreglo de Todos con los nuevos valores */
    /* ...pero re-renderizando tambien en el localStorage */
    saveTodos(newTodos);
  };
  
  /* funcion para eliminar un Todo */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    /*forma corta */
    /*usando el metodo splice enviandole que en la posicion tal (todoIndex) e indicandole que solo sera 1 a eliminar*/
    newTodos.splice(todoIndex, 1);
    /* ...pero re-renderizando tambien en el localStorage */
    saveTodos(newTodos);
  };

  return (
    /* Pasando las propiedades a AppUI, declarandose como un componente mas*/
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
