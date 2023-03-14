import React from 'react';
/* Generacion de los hooks personalizados de los acciones de la aplicacion */
import {useLocalStorage} from '../Hooks/useLocalStorage';
import {useSearchTodos} from '../Hooks/useSearchTodos';
import {useCompleteTodo} from '../Hooks/useCompleteTodo';
import {useDeleteTodo} from '../Hooks/useDeleteTodo';

/* Declarar el contexto donde podemos pasar los valores a los Componentes */
const TodoContext = React.createContext();

/* Funcion para enviar los estados y funciones a toda la aplicacion */
function TodoProvider(props){
    /* Declaracion de un hook principal para recibir del Hook personalizado */
    /* Renombre de viertos estados del localStorage */
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  
    /* Hook personalizado para la busqueda de TODOS */
    const [completedTodos, totalTodos, searchedTodos, searchValue, setSearchValue] = useSearchTodos(todos);
  
    /* Hook personalizado para la muestra de TODOS completados */
    const [completeTodo] = useCompleteTodo(todos, saveTodos);
  
    /* Hook personalizado para la eliminacion de algun TODO */
    const [deleteTodo] = useDeleteTodo(todos, saveTodos);

    /* Hook dl estado para hacer la operacion de la muestra del modal */
    const [openModal, setOpenModal] = React.useState(false);
    
    /* Declaracion de la etiqueta donde se recibe el contexto con "value", enviandose al prop.children declarado */
    return (
        <TodoContext.Provider value={{
            /* Recepcion de las propiedades declaradas en App */
            loading,
            error,
            /* ^ Recepcion de los 2 estados de efecto ^ */
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            /* Envio de las acciones para el modal */
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider};