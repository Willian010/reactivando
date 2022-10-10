import React, { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import { CarItem } from "../../CartItem/CartItem";

 
export const CartContainer = () => {
    const {prodCartList , clearProdCartList, isInCart} = useContext(CartContext);
    
    
    return(
        <div>
            <p>Cartx</p>
           <div>
            {
                prodCartList.length>0 ?
                <>
                   {
                prodCartList.map(item=>(
                    <CarItem key={item.id} item={item} />              
                    ))
            }
            <hr/>
            <button onClick={clearProdCartList}>Vaciar Carro</button>
            <button onClick={()=> isInCart(3)}>1</button>
            
                
                
                </>
                :
                <p>No hay nada que agregar</p>
            }
           </div>
         
            </div>
    )
}