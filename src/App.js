import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
// import './App.css';

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
    /*Renderizado de una sola etiqueta por componente*/
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      {/*Enviando el estado a TodoSearch */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <TodoList>
        {searchedTodos.map(todo => (
          /*Propiedad key: un identificador unico dentro de una lista*/
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> 
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
