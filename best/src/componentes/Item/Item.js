import React, { useState } from "react";
import { Contador } from "../ItemCount/ItemCount";


export const Item  = ({item}) => {
    const {name , src , descripcion, categoria}= item;
    const [likes, setLikes] = useState(0);
    

    const incrementar = () => {
        setLikes(likes + 1 );
        
    }
    
    
    
    
    return(
            <div className="item" key={name}>
            <img src={src} alt="Imagen" className="item-img"/>
            <p className="descripcion">{descripcion}</p>  
            <button className="boton-ver"></button> 
            <p>Categoria{categoria}</p>
            <p>{likes}</p>
            
            <Contador stock={10} initial={0}  agregarProductos={incrementar}/>
            </div>
        
    )
} 
//<button className="item-boton" onClick={incrementar}></button>