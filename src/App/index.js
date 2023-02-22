import React from 'react';
/* Separacion de la parte grafica en un archivo aparte */
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lloras con la Llorona', completed: false }
];

function App() {
  /*Creando un estado exclusivo para los Todos */
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodos);
  };
  
  /* funcion para eliminar un Todo */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    /*forma corta */
    /*usando el metodo splice enviandole que en la posicion tal (todoIndex) e indicandole que solo sera 1 a eliminar*/
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
