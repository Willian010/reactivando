


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