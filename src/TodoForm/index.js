import React from 'react';
import { TodoContext } from '../Context';
import './TodoForm.css';

function TodoForm(){

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <p><label>Escribe tu nuevo TODO</label></p>
            <textarea value={newTodoValue} onChange={onChange} placeholder='Cortar la Cebolla para el almuerzo' className='todoTXA' required  />
            <p className='botones'>
                {/* ?: preguntar si existe el dato en el arreglo, antes de imprimir el dato text */}
                <button type='button' className='exitModal' onClick={onCancel}>Cancelar</button>
                <button type='submit' className='addModal' >Añadir</button>
            </p>
        </form>
    );
}

export{TodoForm};