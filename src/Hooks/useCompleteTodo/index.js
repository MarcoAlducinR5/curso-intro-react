/* import React from 'react'; */

function useCompleteTodo(todos, saveTodos){

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

    return[completeTodo];
}

export {useCompleteTodo};