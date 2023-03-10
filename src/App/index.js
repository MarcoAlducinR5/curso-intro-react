import React from 'react';
/* Separacion de la parte grafica en un archivo aparte */
import { AppUI } from './AppUI';
/* Generacion de los hooks personalizados de los acciones de la aplicacion */
import {useLocalStorage} from '../Hooks/useLocalStorage';
import {useSearchTodos} from '../Hooks/useSearchTodos';
import {useCompleteTodo} from '../Hooks/useCompleteTodo';
import {useDeleteTodo} from '../Hooks/useDeleteTodo';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lloras con la Llorona', completed: false }
]; */

function App() {
  /* Declaracion de un hook principal para recibir del Hook personalizado */
  /* Renombre de viertos estados del localStorage */
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  /* Hook personalizado para la busqueda de TODOS */
  const [completedTodos, totalTodos, searchedTodos, searchValue, setSearchValue] = useSearchTodos(todos);

  /* Hook personalizado para la muestra de TODOS completados */
  const [completeTodo] = useCompleteTodo(todos, saveTodos);

  /* Hook personalizado para la eliminacion de algun TODO */
  const [deleteTodo] = useDeleteTodo(todos, saveTodos);

  /*Jugando con el React.useEffect */
  /* console.log("render antes del use effect");
  React.useEffect(() => {
    console.log("use effect");
  }, [totalTodos]);
  console.log("render despues del use effect"); */
 
  return (
    /* Pasando las propiedades a AppUI, declarandose como un componente mas*/
    <AppUI
      loading={loading}
      error={error}
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
