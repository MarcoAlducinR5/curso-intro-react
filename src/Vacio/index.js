import React from "react"
import { IconNew } from "../Icons/IconNew";
import './Vacio.css';

function Vacio(){
    
    return (
        <figure className="vacio">
            <figcaption>¡Crea un nuevo TODO!</figcaption>
            <IconNew />
        </figure>
    );

}

export {Vacio};
