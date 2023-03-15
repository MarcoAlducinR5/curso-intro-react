import React from "react"
import ContentLoader from "react-content-loader"

function Carga({props}){
    
    return (
        <ContentLoader 
            rtl
            speed={1}
            width={500}
            height={160}
            viewBox="0 0 500 160"
            backgroundColor="#e8e8e8"
            foregroundColor="#d2ff3a"
            {...props}
        >
            <rect x="8" y="16" rx="4" ry="4" width="15" height="25" />
            <rect x="30" y="45" rx="4" ry="4" width="457" height="23" />
            <rect x="8" y="74" rx="4" ry="4" width="15" height="25" />
        </ContentLoader>
    );

}

export {Carga};
