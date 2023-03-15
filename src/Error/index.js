import React from "react"
import img from "../images/error.png";
import './Error.css';

function Error(){
    
    return (
        <figure className="error">
            <figcaption>Desespérate, hubo un error...</figcaption>
            <img className="img" src={img} alt="Desespérate, hubo un error..." />
        </figure>
    );

}

export {Error};
