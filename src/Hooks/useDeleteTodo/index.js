/* import React from 'react'; */

function useDeleteTodo(todos, saveTodos){

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

  return [deleteTodo];
}

export {useDeleteTodo};