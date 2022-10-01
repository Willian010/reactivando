import React, { useState } from "react";

export function Item  ({servidor})  {
     const [likes, setLikes] = useState(0);

    const incrementar = () => {
        setLikes(likes + 1 );
        
    }

    return(
            <div className="item">
            <img src={servidor.imagen} alt="Imagen" className="item-img"/>
            <p className="descripcion">{servidor.descripcion}</p>   
            <p>{likes}</p>
            <button className="item-boton" onClick={incrementar}></button>
            </div>
        
    )
} 