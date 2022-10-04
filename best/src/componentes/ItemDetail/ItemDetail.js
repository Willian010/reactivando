//import { useContext, useState } from "react";
//import { useContext } from "react";
import {ItemCount} from ' ./componentes/ItemCount/ItemCount';
//import {CartContext} from





export const ItemDetail = ({item})=>{
    //const {addServidor}= useContext(CartContext);
    //const [quantity, serQuantity]= useState(0);


    const onAdd = (count) =>{
        addServidor(item,count);
        setQueantity(count);
        }

        return(
            <div>
                    <p>Item Detail</p>
                    <div>
                        <img src={servidor.imagen} alt={servidor.descripcion}/>
                    </div>
                    <div>
                        <h4>{servidor.name}</h4>
                        <h5>{servidor.price}</h5>
                    </div>
                <ItemCount initial={1} stock={10} onAdd={agregar}/>

            </div>
        )
}