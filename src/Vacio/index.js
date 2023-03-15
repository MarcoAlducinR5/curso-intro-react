import React from "react"
import img from "../images/registro.png";
import './Vacio.css';

function Vacio(){
    
    return (
        <figure className="vacio">
            <figcaption>¡Crea tu primer TODO!</figcaption>
            <img className="img" src={img} alt="¡Crea tu primer TODO!" />
        </figure>
    );

}

export {Vacio};
