import React, { useState } from "react";
import { Contador } from "../ItemCount/ItemCount";


export function Item  ({servidor})  {
     const [likes, setLikes] = useState(0);
     const {name , imagen , descripcion}= servidor

    const incrementar = () => {
        setLikes(likes + 1 );
        
    }
    

    return(
            <div className="item" key={name}>
            <img src={imagen} alt="Imagen" className="item-img"/>
            <p className="descripcion">{descripcion}</p>   
            <p>{likes}</p>
            
            <Contador stock={10} initial={0}  agregarServicio={incrementar}/>
            </div>
        
    )
} 
//<button className="item-boton" onClick={incrementar}></button>