import {  useState } from "react";
//import { useContext } from "react";

//import {Con} from ' ./componentes/ItemCount/ItemCount';
import { Contador } from "../ItemCount/ItemCount";
//import {item} from "../ItemDetailContainer/ItemDetailContainer";
//import {CartContext} from '/ AGREGAR RUTA

export const ItemDetail = ({item})=>{
   //const {addServidor}= useContext(CartContext);
    const [quantity, setQuantity]= useState(0);


    const onAdd = (count) =>{
       // addServidor(item,count);
        setQuantity(count);
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

            </div>
        )
}