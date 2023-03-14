import React from 'react';
import { TodoContext } from '../../Context';
import '../Modal.css';

function Contenido(){

    const {setOpenModal} = React.useContext(TodoContext)

    const onClickExitModal = () =>{
        setOpenModal(false);
    };
    
    return (
        <React.Fragment>
            {/* ?: preguntar si existe el dato en el arreglo, antes de imprimir el dato text */}
            <button className='exitModal' onClick={onClickExitModal}>Cancelar</button>
        </React.Fragment>
    );
}

export{Contenido};