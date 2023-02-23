import React from 'react';

function useSearchTodos(todos){
  
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

    return [
    completedTodos, 
    totalTodos, 
    searchedTodos, 
    searchValue, 
    setSearchValue,
    ];
}
 
export {useSearchTodos};