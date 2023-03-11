import React from 'react';
/* Importamos el Provider para usarlo en la App.js */
import { TodoProvider } from '../Context';
/* Separacion de la parte grafica en un archivo aparte */
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Lloras con la Llorona', completed: false }
]; */

function App() {
  /*Jugando con el React.useEffect */
  /* console.log("render antes del use effect");
  React.useEffect(() => {
    console.log("use effect");
  }, [totalTodos]);
  console.log("render despues del use effect"); */
 
  return (
    /* Declarando el provedor del contexto*/
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
