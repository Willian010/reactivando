/*import { Contador } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
//import {agregar} from '../src/App';

export function Greeting () {
    
    return(
        <>
        <div className="ItemListContainer">
        <p >HI</p>
        
        <ItemList/>
        <Contador stock={10} initial={0} agregarServicio={agregar}/>

           </div>
        </>
    )
}*/
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {arregloProductos} from '../BaseDD/BaseDD';



export const ItemListContainer = ()=>{
    const {tipoProducto} = useParams();
    console.log('tipoProducto',tipoProducto);

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.name === tipoProducto);
                // console.log('nuevaLista',nuevaLista)
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])

    console.log('productos', productos)
    return(
        <div className="item-list-container">
            <p>Lista</p>
            <ItemList item={productos}/>
        </div>
    )
} 