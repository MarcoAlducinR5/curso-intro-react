/* import React from 'react'; */

function useAddTodo(todos, saveTodos){

    /* funcion para marcar como completado un Todo */
    const addTodo = (text) => {
        /*Clonando el arreglo declarado anteriormente*/
        const newTodos = [...todos];
        
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    return[addTodo];
}

export {useAddTodo};