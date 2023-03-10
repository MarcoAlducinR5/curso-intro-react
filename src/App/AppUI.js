import React from 'react';
/* Inclusion de ".." para la declaracion de las carpetas de los componentes */
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
/* Importamos el contexto para usarlo en los componentes de la aplicacion */
import { TodoContext } from '../Context';

function AppUI(){
    /* Se declara useContext con el objeto de valores para poder */
    /* usarlos a lo largo del proyecto sin necesidad de pasar props*/
    /* en cada componente */
    const {error, loading, searchedTodos, completeTodo, deleteTodo} 
    = React.useContext(TodoContext);

    return (
        /*Renderizado de una sola etiqueta por componente*/
        <React.Fragment>
            <TodoCounter />

            {/*Enviando el estado a TodoSearch */}
            <TodoSearch />
            
            {/* Se elimina el TodoContext.Consumer */}
            <TodoList>
                {/* Evaluar si hay algiun error, renderiza un mensaje */}
                {error && <p>Desespérate, hubo un error...</p>}
                {/* Renderiza un mensaje cuando esta trabajando para mostrar los datos */}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {/* Evaluar la carga y el tamano de los TODOs, renderiza un mensaje */}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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

export { AppUI };