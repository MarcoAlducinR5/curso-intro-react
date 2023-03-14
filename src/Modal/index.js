import './Modal.css';
import ReactDOM from 'react-dom';

function Modal({ children }){
    /* createPortal: Metodo para generar portales en otro nodo diferente a root */
    return ReactDOM.createPortal(
        /* Se le envia un hijo cuando se llame al modal */
        <div className='ModalFondo'>
            {children}
        </div>,
        /* Se envia el nodo HTML a enviar el hijo */
        document.getElementById('modal')
    );
}

export {Modal};