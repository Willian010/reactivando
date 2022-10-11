import React, { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import { CarItem } from "../../CartItem/CartItem";

 
export const CartContainer = () => {
    const {prodCartList , clearProdCartList, isInCart, getTotalPrice} = useContext(CartContext);
    console.log(prodCartList)
    
    
    const order = {
        buyer: {
            nombre:"mike", telefono: "454545", email:"mikel@gmail.com"
        },
        items:{
            prodCartList,
            

        }

    }

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
            <p>Precio Total: {getTotalPrice()}</p>
            
                
                
                </>
                :
                <p>No hay nada que agregar</p>
            }
           </div>
         
            </div>
    )
}