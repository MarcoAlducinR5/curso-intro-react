import React from 'react';
/* Inclusion de ".." para la declaracion de las carpetas de los componentes */
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
/* Importamos el contexto para usarlo en los componentes de la aplicacion */
import { TodoContext } from '../Context';
/* Importar el Modal generado */
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
/* Declaracion del Hook para el Loading Skeleton */
import { Carga } from '../Carga';
import { Vacio } from '../Vacio';
import { Error } from '../Error';

function AppUI(){
    /* Se declara useContext con el objeto de valores para poder */
    /* usarlos a lo largo del proyecto sin necesidad de pasar props*/
    /* en cada componente */
    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal} 
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
                {error && <Error />}
                {/* Renderiza un mensaje cuando esta trabajando para mostrar los datos */}
                {/* Sustituyendo el <p> por el Loading Skeleton */}
                {loading && <Carga />}
                {/* Evaluar la carga y el tamano de los TODOs, renderiza un mensaje */}
                {(!loading && !searchedTodos.length) && <Vacio />}

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

            {/* Consultar si existe openModal, si es true se renderiza el Modal */}
            {!!openModal && (
                /* Declaracion de Modal en el AppUI */
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
            <CreateTodoButton />
            
        </React.Fragment>
    );
}

export { AppUI };