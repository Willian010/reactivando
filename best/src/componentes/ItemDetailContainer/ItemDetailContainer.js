//import { useState, useEffect } from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../Item/Item';
import {Item} from './componentes/ItemDetail/ItemDetail';
import {arregloServidores} from './componentes/ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const {productoId }= useParams();
    const [ item, setItem] = useState=({});

    const getItem = () => {
         return new Promise(( resolve, reject)=>{
            const productos = arregloServidores.find(item=>item.id === parseInt(id));
            resolve(productos)
         }
    
         )
    }
    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productoId);
            setItem(producto)
        }
        getProducto();
    }, [productoId])
}
return(
    <div>
        <p>Item Detail Container</p>
        <ItemDetail item={Item}/>

    </div>


)