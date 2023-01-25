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
          />
        ))}
      </TodoList> 
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
