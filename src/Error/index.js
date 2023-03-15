import React from "react";
import { IconAlert } from "../Icons/IconAlert";
import './Error.css';

function Error(){
    
    return (
        <figure className="error">
            <figcaption>Desespérate, hubo un error...</figcaption>
            <IconAlert />
        </figure>
    );

}

export {Error};
