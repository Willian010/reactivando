import carrito from '../../assets/carrito.png';
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contex/CartContext"
//import React from 'react'
//import { useState, useEffect } from "react";

export const  CardWidget  =()=> {
    const {getTotalProds , prodCartList} = useContext(CartContext);

  
    return(
        <div>
            {
                prodCartList.length>0 &&
                <>
                <div>
            
          <Link to='/Cart'>
        
       <img className="boton" src={carrito}/>
       </Link></div>
       <span>{getTotalProds()}</span> 
       
       </>
       

            }
       </div>
       )

}
/*  const Carrito =()=>{
    const [estadoCarrito, setEstadoCarrito] = useState("carrito vacio")
     const [numeroProd, setNumeroProd ] = useState(0);
 
   
 useEffect(()=>{
  setTimeout(()=>{
    setEstadoCarrito("esperado servicios")
  }, 2000);
 }, [numeroItem])
 
 
 const agregar =(item)=>{
  console.log('funcion agregar' , item)
  setNumeroItem (prod)
  setEstadoCarrito ( `el carro contiene ${item}`);
 
}
//console.log("agregar" , agregar)
agregar();
 
    }*/
    




