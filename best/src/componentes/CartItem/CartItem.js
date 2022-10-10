import React,{useContext}  from "react";
import { CartContext } from "../contex/CartContext";


export const CarItem = ({item})=>{
    const {removeProd}= useContext(CartContext);


    return(
        <div className="Cart-item-container" >
            <div clart-ima-container>
            
            </div>
            <div className="cart-info-container">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button onClick={()=>removeProd(item.id)}>Eliminar producto</button>
            </div>

        </div>
    )
}