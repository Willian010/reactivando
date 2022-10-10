//import carrito from '../src/assets/carrito.png';
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contex/CartContext"
import React from 'react'

export const  CardWidget  =({numeroCarrito})=> {
    const {getTotalprods,prodCartList} = useContext(CartContext)
    
    return(
        <div>
            {
                prodCartList.length>0 &&
                <>
            <Link to='/Cart'>
       <button ><img className="boton" src = "https://i.pinimg.com/236x/f5/bd/cb/f5bdcb14bb2affdc58660f43281daadd.jpg"/></button>
       </Link>
       <span>{numeroCarrito}</span> 
       </>
       

            }
       </div>
       )

}