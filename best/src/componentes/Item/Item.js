import React, { useState } from "react";

export const Item = ({Item}) => {
     const [likes, setLikes] = useState(0);

    const incrementar = () => {
        setLikes(likes + 1 );
        
    }

    return(
            <div className="item">
            <img src={Item.imagen} alt="Imagen" className="item-img"/>
            <p className="descripcion">{Item.descripcion}</p>   
            <p>{likes}</p>
            <button className="item-boton" onClick={incrementar}></button>
            </div>
        
    )
}