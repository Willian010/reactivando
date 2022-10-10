import {  useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contex/CartContext";
import { Contador } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import React from 'react'

export const ItemDetail = ({item})=>{
   const {addProd}= useContext(CartContext);
    const [quantity, setQuantity]= useState(0);


    const onAdd = (contador) =>{
        addProd(item,contador);
        setQuantity(contador);
      }

        return(
            <div>
                    <p>Item Detail</p>
                    <div>
                        <img src={item.imagen} alt={item.descripcion}/>
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <h5>{item.price}</h5>
                    </div>
                <Contador initial={1} stock={10} onAdd={onAdd}/>
                {
                    quantity>0 &&
                    <Link to='/Cart'>
                    <button>Ir al carrito</button>
                    </Link>
                }  

            </div>
        )
}